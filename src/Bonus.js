import Validate from "./Validate";

class Bonus {
  constructor(bonus, userLotto) {
    this.#validate(bonus, userLotto);
    this.bonus = parseInt(bonus, 10);
  }

  #validate(bonus, userLotto) {
    const parsedBonus = parseInt(bonus, 10);
    const validate = new Validate();
    validate.isValidBonusNumber(parsedBonus, userLotto);
  }

  getBonus() {
    return this.bonus;
  }
}

export default Bonus;
