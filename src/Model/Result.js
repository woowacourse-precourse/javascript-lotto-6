import {
  FIVE_COUNT,
  FOUR_COUNT,
  INCREMENT,
  THREE_COUNT,
  INITIAL_VALUE,
  SIX_COUNT,
} from "../constants/constants.js";

export default class Result {
  #lotteries;
  #winningNumbers;
  #bonusNumber;
  #income;

  constructor(lotteries, winningNumbers, bonusNumber) {
    this.#lotteries = lotteries;
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  checkLotto() {
    const result = {
      threeNumbersCorrect: INITIAL_VALUE,
      fourNumbersCorrect: INITIAL_VALUE,
      fiveNumbersCorrect: INITIAL_VALUE,
      fiveNumbersAndBonusBallCorrect: INITIAL_VALUE,
      sixNumbersCorrect: INITIAL_VALUE,
    };

    this.#lotteries.forEach((numbers) => {
      const matchingNumbers = numbers.filter((number) =>
        this.#winningNumbers.includes(number.toString()),
      );
      const bonusMatch = numbers.includes(Number(this.#bonusNumber));
      const matchCount = matchingNumbers.length;

      if (matchCount === THREE_COUNT) {
        result.threeNumbersCorrect += INCREMENT;
      }

      if (matchCount === FOUR_COUNT) {
        result.fourNumbersCorrect += INCREMENT;
      }

      if (matchCount === FIVE_COUNT) {
        bonusMatch
          ? (result.fiveNumbersAndBonusBallCorrect += INCREMENT)
          : (result.fiveNumbersCorrect += INCREMENT);
      }

      if (matchCount === SIX_COUNT) {
        result.sixNumbersCorrect += INCREMENT;
      }
    });

    return result;
  }

  calculateIncome() {
    const matchResult = this.checkLotto();

    return this.#income =
      5000 * Number(matchResult.threeNumbersCorrect) +
      50000 * Number(matchResult.fourNumbersCorrect) +
      1500000 * Number(matchResult.fiveNumbersCorrect) +
      30000000 * Number(matchResult.fiveNumbersAndBonusBallCorrect) +
      2000000000 * Number(matchResult.sixNumbersCorrect);
  }
}
