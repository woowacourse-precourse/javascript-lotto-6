import { NUMBER, RESULT } from "./utils/constants.js";

class Result {
  #result = {
    THREE: 0,
    FOUR: 0,
    FIVE: 0,
    FIVE_BONUS: 0,
    SIX: 0,
  };
  #profit = 0;

  constructor(winningNumberList, userWinningNumbers, userBonusNumber) {
    this.winningNumberList = winningNumberList;
    this.userWinningNumbers = userWinningNumbers;
    this.bonusNumber = userBonusNumber;
  }

  compare(matchingNumbers, isBonusNumber) {
    const length = matchingNumbers.length;

    if (length === RESULT.THREE.matches) return this.#result.THREE++;
    else if (length === RESULT.FOUR.matches) return this.#result.FOUR++;
    else if (length === RESULT.FIVE.matches) {
      if (isBonusNumber) return this.#result.FIVE_BONUS++;
      return this.#result.FIVE++;
    } else if (length === RESULT.SIX.matches) return this.#result.SIX++;
  }

  calculateResult() {
    this.winningNumberList.forEach((winningNumbers) => {
      const matchingNumbers = winningNumbers.filter((number) =>
        this.userWinningNumbers.includes(number)
      );

      const isBonusNumber = winningNumbers.includes(this.bonusNumber);
      this.compare(matchingNumbers, isBonusNumber);
    });

    return this.#result;
  }

  calculateProfit(lottoCount) {
    for (let score in this.#result) {
      this.#profit += this.#result[score] * RESULT[score].prize;
    }

    this.#profit =
      (this.#profit / (lottoCount * NUMBER.DIVISOR)) * NUMBER.PERCENTAGE;
    return this.#profit.toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}

export default Result;
