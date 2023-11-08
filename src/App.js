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

    this.pickLottoNum(purchasePrice);
    this.checkWinningNum();


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
    return lottos;
  }

  static arraySort(arr) {
    return [...arr].sort((a, b) => a - b);
  }

  pickNum() {
    const lottoNum = MissionUtils.Random.pickUniqueNumbersInRange(LOTTO.MIN_RANGE, LOTTO.MAX_RANGE, LOTTO.LENGTH);
    return lottoNum;
  }

  async checkWinningNum() {
    const winningNum = await inputView.winningNumInput();
        const winningNums = winningNum.split(',');
        validation.checkWinningNum(winningNums);
  }
}

export default App;
