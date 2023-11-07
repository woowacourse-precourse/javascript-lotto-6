import InputError from "../errors/InputError.js";
import InputValidate from "../utils/InputValidate.js";
import { ERRORS } from "../utils/constants.js";
import { LOTTO_GAME_RULE } from "../utils/constants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    InputValidate.validateLottoNumbers(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
