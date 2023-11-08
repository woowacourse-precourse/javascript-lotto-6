import { commonValidation, purchaseAmountValidation } from "./validator/index.js";
import LottoError from './LottoError.js';

export default class Consumer {
  #purchaseAmount;
  lottos;

  constructor(purchaseAmount) {
    this.#purchaseAmount = purchaseAmount;
    this.#validate(purchaseAmount);
  }

  static createConsumer(purchaseAmount) {
    return new this(purchaseAmount);
  }

  consumeLottos(lottos) {
    this.lottos = [...lottos];
  }

  #validate(purchaseAmount) {
    const { errorMessage: isNumberErrorMessage, isInvalid: isNumberInValid } = commonValidation.isNumber;
    if (isNumberInValid(purchaseAmount)) {
      throw LottoError.createLottoError(isNumberErrorMessage);
    }
    Object.values(purchaseAmountValidation).forEach(
      ({ errorMessage, isInvalid }) => {
        if (isInvalid(purchaseAmount))
          throw LottoError.createLottoError(errorMessage);
      }
    )
  }
}
