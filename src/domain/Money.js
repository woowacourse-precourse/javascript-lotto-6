import MoneyDto from '../dto/MoneyDto.js';
import Parser from '../parser/Parser.js';
import validateMoney from '../validator/validateMoney.js';

class Money {
  #money;

  constructor(money) {
    const parsedMoney = Parser.parseInt(money);

    validateMoney(parsedMoney);

    this.#money = parsedMoney;
  }

  static create(money) {
    return new Money(money);
  }

  get() {
    return MoneyDto.getResponse(this.#money);
  }
}

export default Money;
