import { MissionUtils } from "@woowacourse/mission-utils";
import Validator from "./validator/Validator";


// @NOTE - 당첨된 번호
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers
  }

  #validate(numbers) { 
    this.validator = new Validator();
    const ERROR_MESSAGE = this.validator.isWinningNumbersValid(String(numbers));

    if (ERROR_MESSAGE) {
      MissionUtils.Console.print(ERROR_MESSAGE)
      return;
    }
  }
  
  returnValue() {
    this.#numbers = String(this.#numbers).split(',')
    return this.#numbers
  }
}

export default Lotto;