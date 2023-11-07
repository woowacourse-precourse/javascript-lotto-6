import AppError from "./AppError.js";

const LOTTO_NUMBER_LENGTH = 6;

const ERROR_MESSAGE = {
  invalidRottoLength: "로또 번호는 6개여야 합니다.",
  duplication: "중복된 로또 번호가 존재합니다.",
};

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_NUMBER_LENGTH) {
      throw new AppError(ERROR_MESSAGE.invalidRottoLength);
    }
    if (new Set(numbers).size !== LOTTO_NUMBER_LENGTH) {
      throw new AppError(ERROR_MESSAGE.duplication);
    }
  }

  getInformation() {
    return [...this.#numbers].sort((a, b) => a - b);
  }

  checkWinningNumbers(winningNumbers, bonusNumber) {
    const matchedCount = this.#numbers.reduce(
      (count, num) => (winningNumbers.includes(num) ? count + 1 : count),
      0,
    );
    const bonusIncluded = this.#numbers.includes(bonusNumber);

    return {
      matchedCount,
      bonusIncluded,
    };
  }
}

export default Lotto;
