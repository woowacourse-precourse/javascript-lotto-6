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

  constructor(lotteries, winningNumbers, bonusNumber) {
    this.#lotteries = lotteries;
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  checkLotto() {
    const result = {
      threeNumbersCorrect: 0,
      fourNumbersCorrect: 0,
      fiveNumbersCorrect: 0,
      fiveNumbersAndBonusBallCorrect: 0,
      sixNumbersCorrect: 0,
    };

    this.#lotteries.forEach((numbers) => {
      const matchingNumbers = numbers.filter((number) =>
        this.#winningNumbers.includes(number.toString()),
      );
      const bonusMatch = numbers.includes(this.#bonusNumber);
      const matchCount = matchingNumbers.length;

      if (matchCount === THREE_COUNT) {
        result.threeNumbersCorrect += INCREMENT;
      }

      if (matchCount === FOUR_COUNT) {
        result.fourNumbersCorrect += INCREMENT;
      }

      if (matchCount === FIVE_COUNT) {
        bonusmatch
          ? (result.fiveNumbersAndBonusBallCorrect += INCREMENT)
          : (result.fiveNumbersCorrect += INCREMENT);
      }

      if (matchCount === SIX_COUNT) {
        result.sixNumbersCorrect += INCREMENT;
      }
    });

    return result;
  }
}
