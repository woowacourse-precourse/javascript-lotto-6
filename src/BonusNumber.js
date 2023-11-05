import { MissionUtils } from "@woowacourse/mission-utils";
import Validator from "./validator/Validator";
import Output from "./view/Output";

class BonusNumber {
  #bonusNumber

  constructor(bonus, numbers) {
    this.#validate(bonus, numbers)
    this.#bonusNumber = bonus;
  }

  #validate (bonus, numbers) {
    this.validator = new Validator();
    const ERROR_MESSAGE = this.validator.isBonusNumberValid(String(bonus), numbers);

    if (ERROR_MESSAGE) {
      MissionUtils.Console.print(ERROR_MESSAGE)
      return;
    }
  }

  returnValue() {
    this.#bonusNumber = Number(this.#bonusNumber);

    if (/^[1-9]\d*$/.test(this.#bonusNumber)) {
      this.output = new Output();
      this.output.print(this.#bonusNumber)
      return true
    }
    return false
  }
}

export default BonusNumber;