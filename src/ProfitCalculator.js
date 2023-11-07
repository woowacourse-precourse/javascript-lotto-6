import { PROFIT } from "./constants/Standard.js";
import { matchNumberToStringMatcher } from "./utils/Matcher.js";

class ProfitCalculator {
  #lottos;
  #matchCount;
  #winningNumber;
  #bonusNumber;

  constructor({ lottos, winningNumber, bonusNumber }) {
    this.#lottos = lottos;
    this.#winningNumber = winningNumber;
    this.#bonusNumber = bonusNumber;
    this.#matchCount = {
      underTwo: 0,
      three: 0,
      four: 0,
      five: 0,
      fiveWithBonus: 0,
      six: 0,
    };
  }

  getResultAndProfit() {
    this.#confirmLottos();

    const result = {
      three: this.#matchCount.three,
      four: this.#matchCount.four,
      five: this.#matchCount.five,
      fiveWithBonus: this.#matchCount.fiveWithBonus,
      six: this.#matchCount.six,
    };
    const profit = this.#calculateTotalProfit();

    return [result, profit];
  }

  #confirmLottos() {
    this.#lottos.forEach((lotto) => {
      const match = lotto.checkSameNumber(
        this.#winningNumber,
        this.#bonusNumber
      );
      this.#matchCount[matchNumberToStringMatcher(match)]++;
    });
  }

  #calculateTotalProfit() {
    let profit = 0;

    for (let match in this.#matchCount) {
      profit = profit + this.#matchCount[match] * PROFIT[match];
    }

    profit = (profit / this.#lottos.length) * 100;

    return this.#roundingDecimals(profit);
  }

  #roundingDecimals(number) {
    if (Number.isInteger(number)) {
      return String(number);
    }

    number = number.toFixed(2);

    if (number[number.length - 1] === "0") {
      return number.slice(0, number.length - 1);
    }

    return number;
  }
}

export default ProfitCalculator;
