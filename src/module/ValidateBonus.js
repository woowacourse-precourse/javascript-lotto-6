import { errorMessage } from '../Consts.js';

class ValidateBonus {
  #userInput;

  constructor(userInput) {
    this.#userInput = userInput;
    this.#validate(userInput);
  }

  #validate(userInput) {
    if (Number.isNaN(Number(userInput))) {
      throw new Error(errorMessage.bonusNumberNotNumber);
    }
    if (userInput < 1 || userInput > 45) {
      throw new Error(errorMessage.bonusNumberRange);
    }
  }
}

export default ValidateBonus;
