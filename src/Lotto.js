const { ERROR_MESSAGE } = require("./libs/Constant.js");
import { Console } from "@woowacourse/mission-utils";
import Validation from "./libs/Validation.js";
import { LOTTO_NUMBER } from "./libs/Constant.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    Validation.checkNumberList(numbers);
  }

  printNumbers() {
    this.sortNumbers;
    Console.print(`[${this.#numbers.join(", ")}]`);
  }

  sortNumbers() {
    this.#numbers.sort((a, b) => a - b);
  }

  getResult(winningNumList, bonusNumber) {
    let winningCount = 0;

    this.#numbers.forEach((num) => {
      if (winningNumList.includes(num)) winningCount += 1;

      if (winningCount < 3) return null;

      if (winningCount === 6) return 1;

      if (winningCount === 5 && this.#numbers.includes(bonusNumber)) return 2;

      return 8 - winningCount;
    });
  }
}

export default Lotto;
