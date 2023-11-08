import { Random, Console } from '@woowacourse/mission-utils';
import Lotto from '../Lotto.js';
import { MESSAGES } from '../constants/constants.js';

class View {
  constructor() {}

  async readPurchaseAmount() {
    return await Console.readLineAsync(MESSAGES.INPUT.PURCHASE_AMOUNT);
  }

  async readWinningNumbers() {
    return await Console.readLineAsync(MESSAGES.INPUT.WINNING_NUMBERS);
  }

  async readBonusNumber() {
    this.printLine();
    return await Console.readLineAsync(MESSAGES.INPUT.BONUS_NUMBER);
  }

  /**
   *
   * @param {number} purchaseLottoCount
   */
  printPurchaseLottoCount(purchaseLottoCount) {
    this.printLine();
    Console.print(`${purchaseLottoCount}${MESSAGES.OUTPUT.PURCHASE_LOTTO_NUMBER}`);
  }

  /**
   *
   * @param {Lotto[]} purchasedLottos
   */
  printPurchaseLottos(purchaseLottos) {
    purchaseLottos.forEach((purchaseLotto) => {
      Console.print(`[${purchaseLotto.join(', ')}]`);
    });
    this.printLine();
  }

  /**
   *
   * @param {object} statistic - 맞은 개수 객체
   * @param {number} ratio - 총 수익률
   */
  printWinningStatistic(statistic, ratio) {
    Console.print(MESSAGES.OUTPUT.STATISTIC.TITLE);
    Console.print(MESSAGES.OUTPUT.STATISTIC.DIVIDE_LINE);

    Console.print(MESSAGES.OUTPUT.STATISTIC.RESULT.FIFTH(statistic.FIFTH));
    Console.print(MESSAGES.OUTPUT.STATISTIC.RESULT.FOURTH(statistic.FOURTH));
    Console.print(MESSAGES.OUTPUT.STATISTIC.RESULT.THIRD(statistic.THIRD));
    Console.print(MESSAGES.OUTPUT.STATISTIC.RESULT.SECOND(statistic.SECOND));
    Console.print(MESSAGES.OUTPUT.STATISTIC.RESULT.FIRST(statistic.FIRST));

    Console.print(MESSAGES.OUTPUT.STATISTIC.RATIO(ratio));
  }

  printError(error) {
    Console.print(error);
  }

  printLine() {
    Console.print('');
  }
}

export default View;
