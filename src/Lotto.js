import {validate} from "./validation.js";
import {
  Console, 
} from "@woowacourse/mission-utils"

export class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    validate.winningNumbers(numbers);
  }

  sortWinningNumber() {
    this.#numbers.sort((a, b) => a - b);
  }

  printWinningNumber() {
    this.sortWinningNumber();
    Console.print(`[${this.#numbers.join(", ")}]`);
  }

  getResult(winningNumbers, bonusNumber) {
    let correctCount = 0;
    this.#numbers.forEach((el) => {
      if (winningNumbers.includes(el)) correctCount++;
    });
    if (correctCount === 6) return 1;
    if (correctCount === 5 && this.#numbers.includes(bonusNumber)) return 2;
    return 8 - correctCount;
  }
}