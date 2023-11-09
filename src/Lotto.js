import Validations from "./Validations.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    numbers.forEach((number) => {
      Validations.isNumber(number);
      Validations.isInRange(number);
      Validations.isInteger(number);
    });
    Validations.isNotDuplicated(numbers);
    Validations.isProperLength(numbers);
  }
  
  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
