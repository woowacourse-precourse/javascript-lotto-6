import {
  isArrLengthSix,
  hasDuplicate,
  isNumberInRange,
  isInputEmpty,
  isInputNumeric,
  isInteger,
} from "./libs/validate.js";

class WinningNumbers {
  #numbers;

  constructor(input) {
    const inputArr = input.split(",").map((element) => element.trim());
    this.#validate(inputArr);
    this.#numbers = inputArr.map(Number);
  }

  #validate(arr) {
    this.#validateArr(arr);
    this.#validateElement(arr);
  }

  #validateArr(arr) {
    isArrLengthSix(arr);
    hasDuplicate(arr);
  }

  #validateElement(arr) {
    arr.forEach((element) => {
      isInputEmpty(element);
      isInputNumeric(element);
      isInteger(element);
      isNumberInRange(element);
    });
  }
}

export default WinningNumbers;
