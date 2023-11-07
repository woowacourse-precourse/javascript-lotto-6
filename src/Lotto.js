import { ERROR_MESSAGE } from "./constants/message.js";
import {
  InvalidLottoNumberCountError,
  DuplicatedNumberError,
  NotNumberError,
  InvalidNumberRangeError,
  NotIntegerError,
  InvalidBonousNumberCountError,
} from "./utils/Error.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validateLottoNumbers(numbers);
    this.#numbers = numbers;
  }

  #validateLottoNumbers(numbers) {
    if (numbers.length !== 6) throw new InvalidLottoNumberCountError(ERROR_MESSAGE.invalidLottoNumberCount);
    if (new Set(numbers).size !== numbers.length) throw new DuplicatedNumberError(ERROR_MESSAGE.duplicatedNumber);
    this.#validateCommon(numbers);
  }
  // TODO: 추가 기능 구현
  #validateBonousNumber(bonousNumber, lottoWinningNumbers) {
    if (bonousNumber.length !== 1) throw new InvalidBonousNumberCountError(ERROR_MESSAGE.invalidBonousNumberCount);
    if (new Set(bonousNumber.concat(lottoWinningNumbers)).size === lottoWinningNumbers.length)
      throw new DuplicatedNumberError(ERROR_MESSAGE.duplicatedNumber);
    this.#validateCommon(bonousNumber);
  }

  #validateCommon(numbers) {
    if (numbers.some(isNaN)) throw new NotNumberError(ERROR_MESSAGE.notNumber);
    if (numbers.some((number) => number < 1 || number > 45))
      throw new InvalidNumberRangeError(ERROR_MESSAGE.invalidNumberRange);
    if (numbers.some((number) => !Number.isInteger(number))) throw new NotIntegerError(ERROR_MESSAGE.notInteger);
  }

  getNumbers() {
    return this.#numbers;
  }

  matchNumbers({ lottoWinningNumbers, bonousNumber }) {
    this.#validateLottoNumbers(lottoWinningNumbers);
    this.#validateBonousNumber(bonousNumber, lottoWinningNumbers);
    const lottoWinningNumbersMatchCount = this.#calculateMatchCount(lottoWinningNumbers);
    const bonousNumberMatchCount = this.#calculateMatchCount(bonousNumber);
    return { lottoWinningNumbersMatchCount, bonousNumberMatchCount };
  }

  #calculateMatchCount(numbers) {
    let matchCount = 0;
    numbers.forEach((number) => {
      if (this.#numbers.includes(number)) matchCount++;
    });
    return matchCount;
  }
}

export default Lotto;
