import Validate from "./Validate";

class Bonus {
  #bonus;

  constructor(bonus, userLotto) {
    this.#validate(bonus, userLotto);
    this.#bonus = parseInt(bonus, 10);
  }

  #validate(bonus, userLotto) {
    const validate = new Validate();
    validate.isValidBonusNumber(bonus, userLotto);
  }

  getBonus() {
    return this.#bonus;
  }
}

export default Bonus;
