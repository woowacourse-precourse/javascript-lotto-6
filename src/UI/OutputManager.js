import { Console } from '@woowacourse/mission-utils';
import { NUMBER_OF_PURCHASED_LOTTO_MESSAGE } from '../Constants.js';

class OutputManager {
  async printPurchaseAmountInputErrorMessage(errorMessage) {
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
}

export default OutputManager;
