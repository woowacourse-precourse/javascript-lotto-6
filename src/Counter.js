import validateInputAmount from './validations/validateInputAmount.js';

class Counter {
  #inputAmount;

  constructor(inputAmount) {
    this.#validate(inputAmount);
    this.#inputAmount = inputAmount;
  }

  #validate(inputAmount) {
    validateInputAmount(inputAmount);
  }
}

export default Counter;
