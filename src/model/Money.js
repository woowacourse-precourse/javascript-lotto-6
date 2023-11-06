import MoneyValidator from '../service/MoneyValidator.js';

class Money {
  #amount; // 이 돈 얼마인지

  constructor(amount) {
    this.#amount = amount;
  }

  getAmount() {
    return this.#amount;
  }

  #validate(amount) {
    // validator 호출하여 검증하는 로직
    const moneyValidator = new MoneyValidator(amount);
    moneyValidator.validate();
  }
}

export default Money;
