import { LOTTO } from '../constants/constants.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class LottoController {
  #money;
  #lotto;

  constructor() {
    this.#money = 0;
    this.#lotto = [];
  }

  async start() {
    const money = await InputView.readMoney();
    this.validateMoney(money);
  }

  /**
   * 구입금액에 대한 유효성 검사
   * @param {string} money
   */
  validateMoney(money) {
    if (Number(money) % LOTTO.PRICE !== 0) {
      OutputView.moneyError();
      return;
    }
    this.printLottoCount(money);
  }

  /**
   * 구매개수를 출력하는 함수
   * @param {string} money
   */
  printLottoCount(money) {
    OutputView.lottoCount(Number(money) / LOTTO.PRICE);
  }
}

export default LottoController;
