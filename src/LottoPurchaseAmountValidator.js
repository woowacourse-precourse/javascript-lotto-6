import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE, GAME_MESSAGE } from './constants/message';

class LottoPurchaseAmountValidator {
  #purchaseAmount;

  /**
   * 
   * @description 유효성 검사를 통과할 때 까지 구매 금액을 입력받는 함수
   */
  async getPurchaseAmount() {
    let purchaseAmount;
    let valid;

    do {
      purchaseAmount = await Console.readLineAsync(GAME_MESSAGE.promptPurchaseAmount);
      Console.print(purchaseAmount);
      valid = this.validatePurchaseAmount(purchaseAmount)
    } while (!valid);

    this.#purchaseAmount = purchaseAmount;
  }

  /**
   * 
   * @description 구매 금액의 유효성 검사를 하는 함수
   * @param {number} purchaseAmount 구매 금액
   * @returns 유효성 검사 통과 여부
   */
  validatePurchaseAmount(purchaseAmount) {
    try {
      if (purchaseAmount === true || purchaseAmount === false || isNaN(purchaseAmount)) throw new Error(ERROR_MESSAGE.invalidAmountNotPositiveInt);
      if (purchaseAmount <= 0 || purchaseAmount % 1 !== 0) throw new Error(ERROR_MESSAGE.invalidAmountNotPositiveInt);
      if (purchaseAmount % 1000 !== 0) throw new Error(ERROR_MESSAGE.invalidAmountNotDevideBy1000);

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