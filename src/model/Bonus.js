import Validator from "../utils/Validator";

class Bonus {
  #bonus;

  constructor(bonus, lottoNumbers) {
    this.#validate(bonus, lottoNumbers);
    this.#bonus = bonus;
  }

  #validate(numbers, lottoNumbers) {
    Validator.validateBonusNumber(numbers, lottoNumbers);
  }

  getBonusNumber() {
    return this.#bonus;
  }
}

export default Bonus;
