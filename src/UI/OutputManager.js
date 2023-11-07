import { Console } from '@woowacourse/mission-utils';
import {
  GAEM_RESULT_MESSAGE,
  NUMBER_OF_PURCHASED_LOTTO_MESSAGE,
  RATE_OF_RETURN_OUTPUT_FORMAT,
  WINNING_DESCRIPTION_BY_COUNT,
} from '../Constants.js';

class OutputManager {
  async printInputErrorMessage(errorMessage) {
    await Console.print(errorMessage);
  }

  printPurchasedLottosInfo(purchasedLottos) {
    this.printNumberOfLottos(purchasedLottos);
    this.printLottosNumbers(purchasedLottos);
  }

  printNumberOfLottos(numberOfLottos) {
    Console.print(NUMBER_OF_PURCHASED_LOTTO_MESSAGE(numberOfLottos.length));
  }

  printLottosNumbers(purchasedLottos) {
    purchasedLottos.forEach((purchasedLotto) =>
      Console.print(`[${purchasedLotto.getLottoNumbers().join(', ')}]`)
    );
  }

  printMatchingResult(matchingCounts) {
    Object.keys(matchingCounts)
      .map((key) => Number(key))
      .sort((a, b) => a - b)
      .forEach((matchingCount) => {
        Console.print(
          `${WINNING_DESCRIPTION_BY_COUNT[matchingCount]} - ${matchingCounts[matchingCount]}개`
        );
      });
  }

  printRateOfReturn(rateOfReturn) {
    Console.print(RATE_OF_RETURN_OUTPUT_FORMAT(rateOfReturn));
  }

  printGameResult({ matchingCounts, rateOfReturn }) {
    Console.print(GAEM_RESULT_MESSAGE);
    this.printMatchingResult(matchingCounts);
    this.printRateOfReturn(rateOfReturn);
  }
}

export default OutputManager;
