import { ERROR_MESSAGE } from "./Constant.js";

const { Console } = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) throw new Error(ERROR_MESSAGE.NOT_SIX);

    if ([...new Set(numbers)].length !== 6)
      throw new Error(ERROR_MESSAGE.DUPLICATE);

    if (!this.checkNumbersRange(nums)) throw new Error(ERROR_MESSAGE.RANGE);

    if (!this.checkNumbersType(nums)) throw new Error(ERROR_MESSAGE.NUMBER);
  }

  checkNumbersRange(nums) {
    return nums.every((num) => num <= 45 && num >= 1);
  }

  checkNumbersType(nums) {
    return this.#numbers.every((num) => !isNaN(num));
  }

  printNums() {
    this.sortNums;
    Console.print(`[${this.#numbers.join(", ")}]`);
  }

  sortNums() {
    this.#numbers.sort((a, b) => a - b);
  }
}

export default Lotto;
