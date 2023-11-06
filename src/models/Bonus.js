import { ERROR_MESSAGE } from "../constants/errorMessage.js";

class Bonus {
  #number;

  constructor(number){
    this.#validate(number);
    this.#number = number;
  }

  #validate(number){
    this.#validateNumber(number);
    this.#validateRange(number);
  }

  #validateNumber(number) {
    if (isNaN(number)) {
      throw new Error(ERROR_MESSAGE.not_number);
    }
  }

  #validateRange(number) {
    if (number <=0 || number > 45) {
      throw new Error(ERROR_MESSAGE.not_in_range);
    }
  }

  getBonusNumber() {
    return this.#number;
  }
}

export default Bonus;