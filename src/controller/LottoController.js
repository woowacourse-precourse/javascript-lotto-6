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
    // 구매금액 입력
    await this.inputMoney();
    // 로또 생성 후 출력
    this.printLottoCount();
    // 당첨, 보너스 번호 입력
    const numbers = await InputView.readWinningNumber();
    const bonus = await InputView.readBonusNumber();
    // 당첨 내역 체크해서 결과 출력
    this.winningResult(numbers, bonus);
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

  /** 로또 출력 함수 */
  printLottoList() {
    this.#lottos.forEach((lotto) => {
      OutputView.lottoList(lotto);
    });
  }

  /**
   * 당첨 내역 출력 함수
   * @param {number[]} numbers
   * @param {number} bonus
   */
  winningResult(numbers, bonus) {
    const winning = new Winning(numbers, bonus);
    const counts = this.#lottos.map((lotto) => {
      return winning.compareLotto(lotto);
    });
    this.recordResult(counts);
  }

  /**
   * 일치하는 개수로 당첨 내역을 기록하는 함수
   * @param {string[]} counts
   */
  recordResult(counts) {
    const profit = new Profit(counts);
    this.printResult(profit.getHistory());
    this.printProfit(profit.calculate(this.#money));
  }

  /**
   * 당첨 통계 출력하는 함수
   * @param {number[]} counts
   */
  printResult(counts) {
    OutputView.result(counts);
  }

  /**
   * 수익률 출력하는 함수
   * @param {number} percent
   */
  printProfit(percent) {
    OutputView.profit(percent);
  }
}

export default LottoController;
