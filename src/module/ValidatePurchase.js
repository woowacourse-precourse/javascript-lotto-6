import { errorMessage } from '../Consts.js';

class ValidatePurchase {
  #userInput;

  constructor(userInput) {
    this.#userInput = userInput;
    this.#validate(userInput);
  }

  #validate(userInput) {
    if (Number.isNaN(Number(userInput))) {
      throw new Error(errorMessage.purchaseNotNumber);
    }
    if (userInput % 1000 !== 0) {
      throw new Error(errorMessage.purchaseWrongUnit);
    }
  }
}

export default ValidatePurchase;
