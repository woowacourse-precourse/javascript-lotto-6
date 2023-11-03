import Validate from "./Validate.js";
import { SEPARATOR } from "./constants/rule.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const validate = new Validate();
    validate.isOnlyNumberAndComma(numbers);

    const numbersArray = numbers.split(SEPARATOR.USER_LOTTO).map(Number);
    validate.isValidUserLottoInput(numbersArray);
  }
}

export default Lotto;
