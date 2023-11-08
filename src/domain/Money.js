import MoneyDto from '../dto/MoneyDto.js';
import Parser from '../parser/Parser.js';
import validateMoney from '../validator/validateMoney.js';

class Money {
  #money; // 추후 입금, 출금이 있을 수 있으므로 멤버 변수로 관리해야한다.

  // TODO: 에러 캐치 필요
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
