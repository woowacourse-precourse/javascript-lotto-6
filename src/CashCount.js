// 현금->횟수
export class CashCount {
  #count;

  constructor(cash) {
    this.#count = 0;
    this.#validate(cash);
  }

  #validate(cash) {
    if (isNaN(cash)) {
      throw new Error('[ERROR] 숫자가 아닙니다.');
    }
    if (cash < 1000) {
      throw new Error('[ERROR] 금액이 부족합니다.');
    }
    if (cash % 1000 !== 0) {
      throw new Error('[ERROR] 1000원 단위가 아닙니다.');
    }
    this.#count = cash / 1000;
  }

  get count() {
    return this.#count;
  }
}
