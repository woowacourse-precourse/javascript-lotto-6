import { Console, MissionUtils } from "@woowacourse/mission-utils";
import Validator from "./validator/Validator";


// @NOTE - 보너스 넘버 유효성 검사 후 반환
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
    return Number(this.#bonusNumber)
  }
}

export default BonusNumber;