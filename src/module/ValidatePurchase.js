import { errorMessage } from '../Consts.js';

class ValidatePurchase {
  #userInput;

  constructor(userInput) {
    this.#userInput = userInput;
    this.#validate(userInput);
  }

  #validate(userInput) {
    this.checkEmpty(userInput);
    this.checkPositive(userInput);
    this.checkFirst(userInput);
    this.checkType(userInput);
    this.checkWhiteSpace(userInput);
    this.checkUnit(userInput);
  }

  checkEmpty(userInput) {
    if (userInput.trim() === '') {
      throw new Error(errorMessage.purchaseNotNumber);
    }
  }

  checkFirst(userInput) {
    if (userInput[0] === '0' || userInput[0] == '+') {
      throw new Error(errorMessage.purchaseNotNumber);
    }
  }

  checkType(userInput) {
    if (Number.isNaN(Number(userInput))) {
      throw new Error(errorMessage.purchaseNotNumber);
    }
  }

  checkPositive(userInput) {
    if (Number(userInput) < 1000) {
      throw new Error(errorMessage.purchaseWrongUnit);
    }
  }

  checkWhiteSpace(userInput) {
    if (userInput.includes(' ')) {
      throw new Error(errorMessage.whiteSpace);
    }
  }

  checkUnit(userInput) {
    if (Number(userInput) % 1000 !== 0) {
      throw new Error(errorMessage.purchaseWrongUnit);
    }
  }
}

export default ValidatePurchase;
