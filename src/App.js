import { MissionUtils } from '@woowacourse/mission-utils';
import inputView from './InputView.js';
import validation from './validation.js';
import Lotto from './Lotto.js';
import { LOTTO } from './constant.js';
import outputView from './OutputView.js';

class App {
  async play() {
    this.gameStart();
  }

  async gameStart() {
    const purchasePrice = await inputView.purchaseInput();
    validation.checkPurchasePrice(purchasePrice);

    return(this.pickLottoNum(purchasePrice));
  }

  pickLottoNum(purchasePrice){
    const lottos = [];
    const lottoCount = purchasePrice / LOTTO.UNIT;

    while (lottos.length < lottoCount) {
      const lottoNums = arraySort(this.pickNum());
      lottos.push(new Lotto(lottoNums));
    }

    outputView.printLottoCount(lottoCount);
    lottos.forEach((lotto) => outputView.printLottoNum(lotto));

    return this.checkWinningNum(lottos);
  }

  static arraySort(arr) {
    return [...arr].sort((a, b) => a - b);
  }

  pickNum() {
    const lottoNum = MissionUtils.Random.pickUniqueNumbersInRange(LOTTO.MIN_RANGE, LOTTO.MAX_RANGE, LOTTO.LENGTH);
    return lottoNum;
  }

  async checkWinningNum(lottos) {
    const winningNum = await inputView.winningNumInput();
        const winningNums = winningNum.split(',');
        validation.checkWinningNum(winningNums);
    
    const bonusNum = await inputView.bonusNumInput();
      validation.checkBonusNum(winningNums, bonusNum);

    return this.countLottoResult({lottos, winningNums, bonusNum});
  }

  countLottoResult({lottos, winningNums, bonusNum}) {
    const matchScore = [];
    const hasBonusNum = [];

    lottos.forEach((lotto) => {
      matchScore.push(lotto.getMatchCount(winningNums));
      if (lotto.hasBonusNumber(bonusNum))
        hasBonusNum.push(true);
      else
        hasBonusNum.push(false);
    });

    return this.countLottoRank({matchScore, hasBonusNum});
  }

  countLottoRank({matchScore, hasBonusNum}) {
    const rank = [0, 0, 0, 0, 0, 0];
    for (let i = 0; i < matchScore.length; i++) {
      if (matchScore[i] === 6) rank[1] += 1;
      else if (matchScore[i] === 5 && hasBonusNum[i]) {
        rank[2] += 1;
      } else if (matchScore[i] === 5 && !hasBonusNum[i]) {
        rank[3] += 1;
      } else if (matchScore[i] === 4) {
        rank[4] += 1;
      } else if (matchScore[i] === 3) {
        rank[5] += 1;
      }
    }
    return this.calculateWinnings(rank);
  }

  calculateWinnings(rank) {
    let totalWin = 0;
    totalWin += rank[1] * LOTTO.FIRST_PRIZE;
    totalWin += rank[2] * LOTTO.SECOND_PRIZE;
    totalWin += rank[3] * LOTTO.THIRD_PRIZE;
    totalWin += rank[4] * LOTTO.FOURTH_PRIZE;
    totalWin += rank[5] * LOTTO.FIFTH_PRIZE;
    return this.calculateRateOfReturn({rank, totalWin});
  }


}

export default App;
