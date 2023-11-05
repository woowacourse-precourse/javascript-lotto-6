import {
  isArrLengthSix,
  hasDuplicate,
  isNumberInRange,
  isInputEmpty,
  isInputNumeric,
  isInteger,
  isElementInArr,
} from "./libs/validate.js";

class LuckyNumbers {
  #winning;
  #bonus;

  setWinningNumbers(input) {
    const inputArr = input.split(",").map((element) => element.trim());
    this.#validateWinning(inputArr);
    this.#winning = inputArr.map(Number);
  }

  #validateWinning(arr) {
    isArrLengthSix(arr);
    hasDuplicate(arr);

    arr.forEach((element) => {
      isInputEmpty(element);
      isInputNumeric(element);
      isInteger(element);
      isNumberInRange(element);
    });
  }

  setBonusNumber(input) {
    this.#validateBonus(input);
    this.#bonus = Number(input);
  }

  #validateBonus(input) {
    isInputEmpty(input);
    isInputNumeric(input);
    isInteger(input);
    isNumberInRange(input);
    isElementInArr({ element: Number(input), arr: this.#winning });
  }

  get winning() {
    return this.#winning;
  }

  get bonus() {
    return this.#bonus;
  }
}

export default LuckyNumbers;
