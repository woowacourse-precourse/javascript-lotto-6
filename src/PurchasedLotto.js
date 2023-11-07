import Input from './Input';

class PurchasedLotto {
  #cash;

  constructor(cash) {
    this.#validate(cash);
    this.#cash = cash;
  }

  #validate(cash) {
    if (cash === null || isNaN(cash)) {
      throw new Error('[ERROR] 숫자의 형태로 금액을 입력해주세요.');
    }
    if (cash <= 0) {
      throw new Error('[ERROR] 0원 초과의 금액을 입력해주세요.');
    }
    if (cash % 1000 !== 0) {
      throw new Error('[ERROR] 1000원 단위로 금액을 입력해주세요.');
    }
  }
}

export default PurchasedLotto;
