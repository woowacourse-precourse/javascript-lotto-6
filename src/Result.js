import { OUTPUT, MATCH } from "./Constants/Constants.js";
import { Console } from "@woowacourse/mission-utils";

class Result {
  #matchThree;
  #matchFour;
  #matchFive;
  #matchFiveWithBonus;
  #matchSix;

  constructor() {
    this.#matchThree = 0;
    this.#matchFour = 0;
    this.#matchFive = 0;
    this.#matchFiveWithBonus = 0;
    this.#matchSix = 0;
  }

  printStaticsMessage() {
    Console.print(OUTPUT.statics);
  }

  countMatchingNumbers(num) {
    if (num == MATCH.match_3) {
      this.#matchThree += 1;
    }
    if (num == MATCH.match_4) {
      this.#matchFour += 1;
    }
    if (num == MATCH.match_5) {
      this.#matchFive += 1;
    }
    if (num == MATCH.match_5_bonus) {
      this.#matchFiveWithBonus += 1;
    }
    if (num == MATCH.match_6) {
      this.#matchSix += 1;
    }
  }

  printResult() {
    Console.print(OUTPUT.correct_3 + this.#matchThree + OUTPUT.count);
    Console.print(OUTPUT.correct_4 + this.#matchFour + OUTPUT.count);
    Console.print(OUTPUT.correct_5 + this.#matchFive + OUTPUT.count);
    Console.print(
      OUTPUT.correct_5_bouns + this.#matchFiveWithBonus + OUTPUT.count
    );
    Console.print(OUTPUT.correct_6 + this.#matchSix + OUTPUT.count);
  }

  getWinningAmount() {
    return (
      this.#matchThree * 5000 +
      this.#matchFour * 50000 +
      this.#matchFive * 1500000 +
      this.#matchFiveWithBonus * 30000000 +
      this.#matchSix * 2000000000
    );
  }

  printRateOfReturn(purchaseAmount, winningAmount) {
    Console.print(
      OUTPUT.rate_of_return +
        Math.round((winningAmount / purchaseAmount) * 1000) / 10 +
        OUTPUT.percent_is
    );
  }
}
export default Result;
