import { LOTTO } from '../constants/constants.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import Lotto from '../domains/Lotto.js';

class LottoController {
  #money;
  #lottos;

  constructor() {
    this.#money = 0;
    this.#lottos = [];
  }

  async start() {
    const money = await InputView.readMoney();
    this.validateMoney(money);
  }

  /**
   * 구입금액에 대한 유효성 검사
   * @param {string} money
   */
  async validateMoney(money) {
    if (Number(money) % LOTTO.PRICE !== 0) {
      OutputView.moneyError();
      await this.start();
      return;
    }
    this.#money = Number(money);
    this.printLottoCount(money);
  }

  /**
   * 구매개수를 출력하는 함수
   * @param {string} money
   */
  printLottoCount(money) {
    const count = Number(money) / LOTTO.PRICE;
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

  /** 로또 출력 함수 */
  printLottoList() {
    this.#lottos.forEach((lotto) => {
      OutputView.lottoList(lotto);
    });
  }
}

export default LottoController;
