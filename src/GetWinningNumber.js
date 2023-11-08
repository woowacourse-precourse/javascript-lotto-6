import { ERROR_DUPLICATED, ERROR_PRIZE_INVALID } from "./constants/index.js";

class GetWinningNumber {
  #winningNumbers;

  constructor(winningNumbers) {
    this.#winningNumberValidateForm(winningNumbers);
    this.#winningNumberValidateDuplicate(winningNumbers);
    this.#winningNumbers = winningNumbers;
  }

  #winningNumberValidateForm(winningNumbers) {
    const regexNumber = /^\d+$/;
    winningNumbers.split(",").forEach((winningNumber) => {
      if (!regexNumber.test(winningNumber)) {
        throw new Error(ERROR_PRIZE_INVALID);
      }
    });
  }

  #winningNumberValidateDuplicate(winningNumbers) {
    const regexDuplicatedInLottoRange =
      /^(?!.*(\d+)(?=.*\b\1\b))(?:(?:[1-9]|[1-3]\d|4[0-5])(?:,|$)){6}$/;
    if (!regexDuplicatedInLottoRange.test(winningNumbers)) {
      throw new Error(ERROR_DUPLICATED);
    }
  }

  getWinningNumber() {
    return this.#winningNumbers;
  }
}

export default GetWinningNumber;
