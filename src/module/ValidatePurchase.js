import { errorMessage } from '../Consts.js';

class ValidatePurchase {
  #userInput;

  constructor(userInput) {
    this.#userInput = userInput;
    this.#validate(userInput);
  }

  #validate(userInput) {
    this.checkType(userInput);
    this.checkWhiteSpace(userInput);
    this.checkUnit(userInput);
  }

  checkType(userInput) {
    if (Number.isNaN(Number(userInput))) {
      throw new Error(errorMessage.purchaseNotNumber);
    }
  }

  checkWhiteSpace(userInput) {
    if (userInput.includes(' ')) {
      throw new Error(errorMessage.whiteSpace);
    }
  }

  checkUnit(userInput) {
    if (userInput % 1000 !== 0) {
      throw new Error(errorMessage.purchaseWrongUnit);
    }
  }
}

export default ValidatePurchase;
