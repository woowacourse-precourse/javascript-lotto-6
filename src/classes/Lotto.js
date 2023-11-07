import { ERROR_MESSAGE } from "../constant/lottoConstants";

class Lotto {
  #numbers;

  #bonusNumber;

  constructor(numbers, bonusNumber) {
    this.#validate(numbers);
    this.#validateNumber(bonusNumber);
    this.#numbers = numbers.sort((a, b) => a - b);
    this.#validateBonusNumber(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  #validate(numbers) {
    numbers.forEach((number) => this.#validateNumber(number));

    if (numbers.length !== 6) {
      throw ERROR_MESSAGE.LESS_LOTTO_NUMBERS;
    }

    if (new Set(numbers).size !== 6) {
      throw ERROR_MESSAGE.LOTTO_NUMBER_HAVE_DUPLICATE;
    }
  }

  #validateNumber(number) {
    if (Number.isNaN(Number(number))) {
      throw ERROR_MESSAGE.MUST_BE_NUMBER;
    }

    if (number < 1 || number > 45) {
      throw ERROR_MESSAGE.INVALID_LOTTO_NUMBER_RANGE;
    }
  }

  #validateBonusNumber(bonusNumber) {
    if (this.#numbers.includes(bonusNumber)) {
      throw ERROR_MESSAGE.INVALID_BONUS_NUMBER;
    }
  }

  getWinningNumbers() {
    return {
      winningNumbers: this.#numbers,
      bonusNumber: this.#bonusNumber,
    };
  }
}

export default Lotto;
