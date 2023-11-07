import { COMMON_NUMBER_VALIDATOR, LOTTO_NUMBERS_VALILDATOR } from "./utils/validation.js";
import { MATH_FACTORS } from "./constants/lotto.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#validateLottoNumbers(numbers);
    this.#validateCommonNumber(numbers);
  }

  #validateLottoNumbers(numbers) {
    Object.values(LOTTO_NUMBERS_VALILDATOR).forEach((validator) => {
      validator(numbers);
    });
  }
  // TODO: 추가 기능 구현
  #validateCommonNumber(numbers) {
    Object.values(COMMON_NUMBER_VALIDATOR).forEach((validator) => {
      validator(numbers);
    });
  }

  getNumbers() {
    return this.#numbers;
  }

  matchNumbers({ lottoWinningNumbers, bonusNumber }) {
    const lottoWinningNumbersMatchCount = this.#calculateMatchCount(lottoWinningNumbers);
    const bonusNumberMatchCount = this.#calculateMatchCount(bonusNumber);

    return { lottoWinningNumbersMatchCount, bonusNumberMatchCount };
  }

  #calculateMatchCount(numbers) {
    let matchCount = MATH_FACTORS.initialValue;

    numbers.forEach((number) => {
      if (this.#numbers.includes(number)) matchCount++;
    });

    return matchCount;
  }
}

export default Lotto;
