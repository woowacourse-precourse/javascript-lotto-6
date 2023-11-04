import Parser from '../parser/Parser.js';
import MoneyValidator from '../validator/MoneyValidator.js';

class Money {
  #money;

  // TODO: 에러 캐치 필요
  constructor(money) {
    const parsedMoney = Parser.parseMoney(money);
    this.#money = MoneyValidator(parsedMoney);
  }

  static create(money) {
    // 화폐 단위로 나뉠 수 있으므로 팩토리 메서드 사용
    return new Money(money);
  }
}

export default Money;
