import { errorMessage } from '../Consts.js';

class ValidateBonus {
  #userInput;
  #winningNumbers;

  constructor(userInput, winningNumbers) {
    this.#userInput = userInput;
    this.#winningNumbers = winningNumbers;
    this.#validate(this.#userInput);
  }

  #validate(userInput) {
    this.checkType(userInput);
    this.checkWhiteSpace(userInput);
    this.checkRange(userInput);
    this.checkDuplicated(userInput);
  }

  checkType(userInput) {
    if (Number.isNaN(Number(userInput))) {
      throw new Error(errorMessage.bonusNumberNotNumber);
    }
  }

  checkWhiteSpace(userInput) {
    if (userInput.includes(' ')) {
      throw new Error(errorMessage.whiteSpace);
    }
  }

  checkRange(userInput) {
    if (userInput < 1 || userInput > 45) {
      throw new Error(errorMessage.bonusNumberRange);
    }
  }

  checkDuplicated(userInput) {
    const winningArray = this.#winningNumbers.split(',');
    if (winningArray.some(number => number === userInput)) {
      throw new Error(errorMessage.duplicatedBonusNumber);
    }
  }
}

export default ValidateBonus;
