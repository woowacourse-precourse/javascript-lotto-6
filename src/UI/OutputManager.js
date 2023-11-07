import { Console } from '@woowacourse/mission-utils';

class OutputManager {
  async printPurchaseAmountInputErrorMessage(errorMessage) {
    await Console.print(errorMessage);
  }
}

export default OutputManager;
