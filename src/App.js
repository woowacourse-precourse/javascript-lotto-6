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
}

export default App;
