import Validator from "./utils/Validator.js";

class BonusNum {
  #num;

  constructor(input, lottoNum) {
    this.#validate(input, lottoNum);
    this.#num = input;
  }

  #validate(input, lottoNum) {
    Validator.bonusNum(input);
    Validator.checkRange(input);
    Validator.isBonusSameWithLotto(input, lottoNum);
  }

  returnNum() {
    return this.#num;
  }
}

export default BonusNum;
