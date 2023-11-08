import { ERRORS } from "./contants.js";

class Bonus {
  #bonus;

  constructor(bonus) {
    this.#validate(bonus);
    this.#bonus = bonus;
  }

  #validate(bonus) {
    if (isNaN(bonus)) {
      throw new Error(ERRORS.NOT_NUMBER);
    }

    if (bonus <=0 || bonus > 45) {
      throw new Error(ERRORS.OUT_OF_RANGE);
    }
  }

  getBonusNumber() {
    return this.#bonus;
  }
}

export default Bonus;