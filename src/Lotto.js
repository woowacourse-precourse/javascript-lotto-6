import Constants from "./ValidateConstants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.result = "";
  }

  /* eslint-disable class-methods-use-this */
  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(Constants.LOTTO_ERROR_MESSAGES.INVALID_NUMBER_COUNT);
    }

    const set = new Set(numbers);
    if (numbers.length !== set.size) {
      throw new Error(Constants.LOTTO_ERROR_MESSAGES.DUPLICATE_VALUES);
    }

    if (numbers.some((number) => isNaN(Number(number)) || number % 1 !== 0)) {
      throw new Error(Constants.LOTTO_ERROR_MESSAGES.NOT_AN_INTEGER);
    }

    if (numbers.some((number) => number < 1 || number > 45)) {
      throw new Error(Constants.LOTTO_ERROR_MESSAGES.OUT_OF_RANGE);
    }
  }

  checkResult({ win, bonus }) {
    const cntCorrect = this.#numbers.filter((number) =>
      win.includes(number),
    ).length;
    const checkBonus = this.#numbers.includes(bonus);
    this.result = this.#determineResult(cntCorrect, checkBonus);
  }

  #determineResult(cntCorrect, checkBonus) {
    const prizeMap = {
      6: "6개 일치 (2,000,000,000원)",
      5: checkBonus
        ? "5개 일치, 보너스 볼 일치 (30,000,000원)"
        : "5개 일치 (1,500,000원)",
      4: "4개 일치 (50,000원)",
      3: "3개 일치 (5,000원)",
    };

    return prizeMap[cntCorrect] || "None";
  }
}

export default Lotto;
