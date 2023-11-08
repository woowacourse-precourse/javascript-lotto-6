import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE, GAME_MESSAGE } from "./constants/constant";

class LottoPurchaseAmountValidator {
  #purchaseAmount;

  async getPurchaseAmount() {
    let purchaseAmount;
    let valid;

    do {
      purchaseAmount = await Console.readLineAsync(
        GAME_MESSAGE.promptPurchaseAmount
      );
      Console.print(purchaseAmount);
      valid = this.validatePurchaseAmount(purchaseAmount);
    } while (!valid);

    this.#purchaseAmount = purchaseAmount;
  }

  validatePurchaseAmount(purchaseAmount) {
    try {
      if (
        purchaseAmount === true ||
        purchaseAmount === false ||
        isNaN(purchaseAmount)
      )
        throw new Error(ERROR_MESSAGE.invalidAmountNotPositiveInt);
      if (purchaseAmount <= 0 || purchaseAmount % 1 !== 0)
        throw new Error(ERROR_MESSAGE.invalidAmountNotPositiveInt);
      if (purchaseAmount % 1000 !== 0)
        throw new Error(ERROR_MESSAGE.invalidAmountNotDevideBy1000);

      return true;
    } catch (error) {
      Console.print(error.message);
      return false;
    }
  }

  get purchaseAmount() {
    return this.#purchaseAmount;
  }
}

export default LottoPurchaseAmountValidator;
