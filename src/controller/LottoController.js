import { LOTTO } from '../constants/constants.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import Lotto from '../domains/Lotto.js';
import Winning from '../domains/Winning.js';
import Profit from '../domains/Profit.js';
import { checkMoneyValidate } from '../utils/validate.js';

class LottoController {
  #money;
  #lottos;

  constructor() {
    this.#money = 0;
    this.#lottos = [];
  }

  async start() {
    await this.inputMoney();
    this.printLottoCount();
  }

  /** 구입금액 입력 함수 */
  async inputMoney() {
    const money = await InputView.readMoney();
    try {
      checkMoneyValidate(money);
      this.#money = Number(money);
    } catch (error) {
      OutputView.moneyError(error);
      await this.inputMoney();
    }
  }

  /** 구매개수 출력 함수 */
  printLottoCount() {
    const count = this.#money / LOTTO.PRICE;
    OutputView.lottoCount(count);
    this.createLotto(count);
  }

  /**
   * 구매개수만큼 로또 생성 함수
   * @param {number} count
   */
  createLotto(count) {
    Array.from({ length: count }, () => {
      const lotto = Lotto.buyLotto();
      this.#lottos.push(lotto);
    });
    this.printLottoList();
  }
}

export default LottoController;
