import Validator from "./Validator/Validator";

class BonusNumber {
  #bonusNumber

  constructor(bonus, numbers) {
    this.#validate(bonus, numbers)
    this.#bonusNumber = bonus;
  }

  #validate (bonus, numbers) {
    Validator.isBonusNumberValid(String(bonus), numbers)
  }

  returnValue() {
    return Number(this.#bonusNumber)
  }
}

export default BonusNumber;