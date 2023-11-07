import { Console } from "@woowacourse/mission-utils";
import {
  BONUS_ANCHOR_INDEX,
} from "./constants/numeric";
import {
  validateLength,
  validateNoDuplicates,
  validateRangeInArray,
} from "./utils/validator";

class Lotto {
  #numbers;

  constructor(numbers) {
    validateLength(numbers);
    validateNoDuplicates(numbers);
    validateRangeInArray(numbers);
    this.#numbers = numbers;
  }

  printSortedNumbers() {
    return Console.print(`[${this.#numbers.sort((a, b) => a - b).join(", ")}]`);
  }

  getRank(winningNumbers, bonusNumber) {
    let count = this.#numbers.filter((number) =>
      winningNumbers.includes(String(number))
    ).length;

    const hasBonus = this.#numbers.includes(bonusNumber);

    if (count === BONUS_ANCHOR_INDEX && hasBonus) {
      count++;
    }

    return count;
  }
}

export default Lotto;
