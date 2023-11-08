const { ERROR_MESSAGE } = require("./libs/Constant.js");
const { Console } = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  printNums() {
    this.sortNums;
    Console.print(`[${this.#numbers.join(", ")}]`);
  }

  sortNums() {
    this.#numbers.sort((a, b) => a - b);
  }

  getResult(winningNumList, bonusNum) {
    let winningCount = 0;

    this.#numbers.forEach((num) => {
      if (winningNumList.includes(num)) winningCount += 1;

      if (winningCount < 3) return null;

      if (winningCount === 6) return 1;

      if (winningCount === 5 && this.#numbers.includes(bonusNum)) return 2;

      return 8 - winningCount;
    });
  }
}

export default Lotto;
