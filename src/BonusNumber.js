import {
  isInputEmpty,
  isInputNumeric,
  isInteger,
  isNumberInRange,
} from "./libs/validate.js";

class BonusNumber {
  #number;

  constructor(input) {
    this.#validate(input);
    this.#number = Number(input);
  }

  #validate(input) {
    isInputEmpty(input);
    isInputNumeric(input);
    isInteger(input);
    isNumberInRange(input);
    // 보너스 번호가 포함되어있는지 validate
  }
}

export default BonusNumber;
