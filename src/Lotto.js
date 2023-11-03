import Validate from "./Validate.js";
import Utils from "./Utils.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const validate = new Validate();
    validate.isOnlyNumberAndComma(numbers);

    const numbersArray = Utils.convertStringIntoNumberArray(numbers);
    validate.isValidUserLottoInput(numbersArray);
  }

  getUserLotto() {
    return Utils.convertStringIntoNumberArray(this.#numbers);
  }
}

export default Lotto;
