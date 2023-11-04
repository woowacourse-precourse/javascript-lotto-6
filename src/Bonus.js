import Validate from "./Validate";

class Bonus {
  constructor(bonus, userLotto) {
    this.#validate(bonus, userLotto);
    this.bonus = bonus;
  }

  #validate(bonus, userLotto) {
    const validate = new Validate();
    validate.isValidBonusNumber(bonus, userLotto);
  }

  getBonus() {
    return parseInt(this.bonus, 10);
  }
}

export default Bonus;
