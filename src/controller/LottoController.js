import { LOTTO } from '../constants/constants.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import Lotto from '../domains/Lotto.js';
import Winning from '../domains/Winning.js';
import Profit from '../domains/Profit.js';

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
    this.inputWinningNumber();
  }

  /** 당첨, 보너스 번호 입력받는 함수 */
  async inputWinningNumber() {
    const numbers = await InputView.readWinningNumber();
    const bonus = await InputView.readBonusNumber();

    this.countWinningNumber(numbers, bonus);
  }

  /**
   * 당첨번호와 로또번호 비교하는 함수
   * @param {number[]} numbers
   * @param {number} bonus
   */
  countWinningNumber(numbers, bonus) {
    const winning = new Winning(numbers, bonus);
    const counts = this.#lottos.map((lotto) => {
      return winning.compareLotto(lotto);
    });

    this.winningStatistic(counts);
  }
}

export default LottoController;
