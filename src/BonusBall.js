import Validator from './validator/Validator.js';

class BonusBall {
  #number;

  constructor(number, lotto) {
    this.#validate(number, lotto);
    this.#number = number;
  }

  #validate(number, lotto) {
    Validator.range([number]);

    if (lotto.includes(number)) {
      throw new Error(
        '[ERROR] 보너스 번호는 당첨 번호에 포함되지 않은 숫자여야 합니다.'
      );
    }
  }

  includedIn(lotto) {
    return lotto.includes(this.#number);
  }
}

export default BonusBall;
