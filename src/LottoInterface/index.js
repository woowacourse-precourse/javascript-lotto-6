import { Console } from "@woowacourse/mission-utils";

import {
  validateAmountToPurchase,
  validateBonusNumber,
  validateWinningNumbers,
} from "../validators/lottoInterface/index.js";
import LOTTO_INTERFACE from "../constants/lottoInterface.js";
import LOTTO from "../constants/lotto.js";
import messageFormatter from "../utils/messageFormatter.js";

class LottoInterface {
  /**
   * @returns {number}
   */
  async readAmountToPurchase() {
    const answer = await Console.readLineAsync(
      LOTTO_INTERFACE.input.amountToPurchase,
    );
    validateAmountToPurchase(answer);
    return parseInt(answer, 10);
  }

  /**
   * @returns {number[]}
   */
  async readWinningNumbers() {
    const answer = await Console.readLineAsync(
      LOTTO_INTERFACE.input.winningNumbers,
    );
    validateWinningNumbers(answer);
    return answer.split(",").map((number) => parseInt(number, 10));
  }

  /**
   * @returns {number}
   */
  async readBonusNumber() {
    const answer = await Console.readLineAsync(
      LOTTO_INTERFACE.input.bonusNumber,
    );
    validateBonusNumber(answer);
    return parseInt(answer, 10);
  }

  printError(errorMessage) {
    Console.print(errorMessage);
  }

  /**
   * @param {Lotto[]} lottoes
   */
  printPurchasedLottoes(lottoes) {
    Console.print(messageFormatter.output.purchaseCompleted(lottoes.length));

    lottoes.forEach((lotto) => {
      const numbers = lotto.getNumbers();
      Console.print(`[${numbers.join(", ")}]`);
    });
  }

  /**
   * @param {ResultOfDrawLotto} resultOfDrawLotto
   * @param {string} rateOfReturn
   */
  printWinningStatistics(resultOfDrawLotto, rateOfReturn) {
    Console.print(LOTTO_INTERFACE.output.winningStatistics);

    const result = resultOfDrawLotto.getResult();
    LOTTO.orderedRank.forEach((rank) => {
      this.#printWinningStatisticsOneLine(result, rank);
    });

    Console.print(messageFormatter.output.totalRateOfReturn(rateOfReturn));
  }

  #printWinningStatisticsOneLine(result, rank) {
    const rankKey = LOTTO.rankKey[rank];
    const prizeMoney = LOTTO.prizeMoney[LOTTO.rankKey[[rank]]].toLocaleString();
    const count = result[LOTTO.rankKey[[rank]]];

    Console.print(
      messageFormatter.output.winningStatisticsOneLine(
        rankKey,
        prizeMoney,
        count,
      ),
    );
  }
}

export default LottoInterface;
