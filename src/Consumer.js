import { commonValidation, purchaseAmountValidation } from "./validator/index.js";
import LottoError from "./LottoError.js";
export default class Consumer {
  #purchaseAmount;

  constructor(purchaseAmount) {
    this.#purchaseAmount = purchaseAmount;
    this.#validate(purchaseAmount);
  }

  static createConsumer(purchaseAmount) {
    return new this(purchaseAmount);
  }

  #validate(number) {
    const { errorMessage: isNumberErrorMessage, isInvalid: isNumberInValid } = commonValidation.isNumber;
    if (isNumberInValid(number)) {
      throw LottoError.createLottoError(isNumberErrorMessage);
    }
    Object.values(purchaseAmountValidation).forEach(
      ({ errorMessage, isInvalid }) => {
        if (isInvalid(number))
          throw LottoError.createLottoError(errorMessage);
      }
    )
  }
}
