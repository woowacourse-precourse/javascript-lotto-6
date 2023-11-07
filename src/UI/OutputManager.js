import { Console } from '@woowacourse/mission-utils';

class OutputManager {
  async printPurchaseAmountInputErrorMessage(errorMessage) {
    await Console.print(errorMessage);
  }

  printPurchasedLottosInfo(purchasedLottos) {
    this.printNumberOfLottos(purchasedLottos.length);
  }

  printNumberOfLottos(numberOfLottos) {
    Console.print(numberOfLottos);
  }
}

export default OutputManager;
