import { ERROR_MESSAGE } from "./Constants.js";
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    console.log(numbers);
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.NOT_NUMBER_6);
    }
    if (new Set(numbers).size !== numbers.length)
      throw new Error(ERROR_MESSAGE.DUPLICATE_NUMBER);
    if (this.hasBoolean(numbers))
      throw new Error(ERROR_MESSAGE.CONTAIN_BOOLEAN);
    if (this.hasText(numbers)) throw new Error(ERROR_MESSAGE.CONTAIN_TEXT);
    if (this.hasSpaces(numbers)) throw new Error(ERROR_MESSAGE.CONTAIN_SPACES);
    if (this.hasSpecialCharacter(numbers))
      throw new Error(ERROR_MESSAGE.CONTAIN_SPECIAL_CHARACTER);
    if (this.hasValueOutsideRange(numbers)) {
      console.log(1);
      throw new Error(ERROR_MESSAGE.NOT_NUMBER_IN_1_TO_45);
    }
  }

  hasSpaces(arr) {
    const foundItem = arr.find((v) => typeof v === "string" && v.includes(" "));
    return foundItem !== undefined ? true : false;
  }
  hasSpecialCharacter(arr) {
    const specialCharacter = /[^A-Za-z0-9\s]/;
    const foundItem = arr.find((v) => specialCharacter.test(v));
    return foundItem !== undefined ? true : false;
  }
  hasText(arr) {
    const regex = /[A-Za-z가-힣]/;
    const foundItem = arr.find((v) => regex.test(v));
    return foundItem !== undefined ? true : false;
  }
  hasBoolean(arr) {
    const foundItem = arr.find(
      (v) => typeof v === "boolean" && v !== 1 && v !== 0
    );
    return foundItem !== undefined ? true : false;
  }
  hasValueOutsideRange(arr) {
    const foundItem = arr.find((v) => v > 45 || v < 1);
    return foundItem !== undefined ? true : false;
  }
}

export default Lotto;
