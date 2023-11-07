import { ERROR } from "../const/Messages.js";

class UserBonusNumber {
  constructor() {
    this.bonusNumber = null;
  }

  getBonusNumber() {
    return this.bonusNumber;
  }

  setBonusNumber(input) {
    const number = parseInt(input.trim(), 10);
    this.#validate(number);
    this.bonusNumber = number;
  }

  #validate(number) {
    if (isNaN(number)) {
      throw new Error(ERROR.ONE_NUMBER);
    }

    if (number < 1 || number > 45) {
      throw new Error(ERROR.NUMBER_RANGE);
    }
  }
}

export default UserBonusNumber;
