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
    // 화폐 단위로 나뉠 수 있으므로 팩토리 메서드 사용
    return new Money(money);
  }

  // 이 클래스가 1000원, 500원 이렇게 구분 단위가 생긴다면 출력이 번거로워질 수 있으므로 DTO에 책임 인가
  get() {
    return MoneyDto.getResponse(this.#money);
  }
}

export default Money;
