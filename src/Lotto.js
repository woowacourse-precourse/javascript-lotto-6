import { Console } from "@woowacourse/mission-utils";
import Validation from "./libs/Validation.js";
import { RANK } from "./libs/Constant.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.validation = new Validation();
    this.validation.checkLottoNum(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }

  print() {
    Console.print("[" + this.getNumbers().join(", ") + "]");
  }

  getRank(userNumber, bonusNumber) {
    const winningCount = this.countWinning(userNumber);

    if (winningCount === RANK.FIRST.MATCHING_COUNT) {
      return RANK.FIRST.NAME;
    }
    if (
      winningCount === RANK.SECOND.MATCHING_COUNT &&
      this.hasBonusNumber(bonusNumber)
    ) {
      return RANK.SECOND.NAME;
    }
    if (winningCount === RANK.THIRD.MATCHING_COUNT) {
      return RANK.THIRD.NAME;
    }
    if (winningCount === RANK.FOURTH.MATCHING_COUNT) {
      return RANK.FOURTH.NAME;
    }
    if (winningCount === RANK.FIFTH.MATCHING_COUNT) {
      return RANK.FIFTH.NAME;
    }
  }

  countWinning() {
    return this.getNumbers().filter((num) => userNumber.includes(num)).length;
  }

  hasBonusNumber() {
    return this.getNumbers().includes(bonusNumber);
  }
}

export default Lotto;
