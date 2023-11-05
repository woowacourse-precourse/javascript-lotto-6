import { hasDuplicate, isNumbersLengthSix } from "./libs/validate";

class WinningNumbers {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#validateArr(numbers);
    this.#validateElement(numbers);
  }

  #validateArr(numbers) {
    isNumbersLengthSix(numbers);
    hasDuplicate(numbers);
  }

  #validateElement(numbers) {
    numbers.forEach((number) => {
      isInputEmpty(number);
      isInputNumeric(number);
      isNumberInRange(number);
    });
  }
}

export default WinningNumbers;
