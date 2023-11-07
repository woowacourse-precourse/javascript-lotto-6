import MoneyValidator from '../service/MoneyValidator.js';

class Money {
  #amount;

  constructor(amount) {
    this.#validate(amount);
    this.#amount = amount;
  }

  getAmount() {
    return this.#amount;
  }

  #validate(amount) {
    const moneyValidator = new MoneyValidator(amount);
    moneyValidator.validate();
  }
}

export default Money;
