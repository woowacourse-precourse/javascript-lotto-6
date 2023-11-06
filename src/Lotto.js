const { ERROR_MESSAGE } = require("./Constant.js");
const { Console } = require("@woowacourse/mission-utils");
const validation = require("./Validation.js");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    validation.checkNumberList(numbers);
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
