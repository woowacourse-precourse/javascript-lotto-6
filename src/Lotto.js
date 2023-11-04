import Validate from "./Validate";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const validate = new Validate();
    validate.isValidUserLottoInput(numbers);
  }

  getUserLotto() {
    return this.#numbers;
  }
}

export default Lotto;
