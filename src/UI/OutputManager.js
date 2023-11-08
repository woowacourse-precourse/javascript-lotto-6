import { Console } from '@woowacourse/mission-utils';
import {
  GAEM_RESULT_MESSAGE,
  NUMBER_OF_PURCHASED_LOTTO_MESSAGE,
  RATE_OF_RETURN_OUTPUT_FORMAT,
  WINNING_DESCRIPTION_BY_COUNT,
} from '../Constant/Constants.js';
import { getRateOfReturnOutPutFormat } from '../Util/Utils.js';

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

  printMatchingResults(matchingResults) {
    Object.keys(matchingResults)
      .map((key) => Number(key))
      .sort((a, b) => a - b)
      .forEach((matchingResult) => {
        Console.print(
          `${WINNING_DESCRIPTION_BY_COUNT[matchingResult]} - ${matchingResults[matchingResult]}개`
        );
      });
  }

  printRateOfReturn(rateOfReturn) {
    Console.print(
      RATE_OF_RETURN_OUTPUT_FORMAT(getRateOfReturnOutPutFormat(rateOfReturn))
    );
  }

  printGameResult({ matchingResults, rateOfReturn }) {
    Console.print(GAEM_RESULT_MESSAGE);
    this.printMatchingResults(matchingResults);
    this.printRateOfReturn(rateOfReturn);
  }
}

export default OutputManager;
