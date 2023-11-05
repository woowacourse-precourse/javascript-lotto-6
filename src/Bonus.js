import { Message } from './Message.js';

class Bonus {
  #number;
  #winningNumbers;

  constructor(bonusNumber, winningNumbers) {
    this.#validate(parseInt(bonusNumber, 10), winningNumbers);
    this.#number = parseInt(bonusNumber);
    this.#winningNumbers = winningNumbers;
  }

  get number() {
    return this.#number;
  }

  #validate(bonusNumber, winningNumbers) {
    if (Number.isNaN(bonusNumber)) {
      throw new Error(Message.error.NOT_NUMBER);
    }
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error(Message.error.NOT_RANGE);
    }
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error(Message.error.NOT_UNIQUE);
    }
  }
}

export { Bonus };
