import CONSTANTS from './Util/Constants.js';
import { ERROR_MESSAGE } from './Util/Message.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== CONSTANTS.lottoCount) {
      throw ERROR_MESSAGE.isNotLength;
    }
    this.#validateIsAllNumber(numbers);
    this.#validateNumberRange(numbers);
    this.#validateDuplicateNumber(numbers);
  }

  #validateIsAllNumber(numbers) {
    numbers.forEach((lottoNumber) => {
      if (Number.isNaN(Number(lottoNumber))) throw ERROR_MESSAGE.isChar;
    });
  }

  #validateNumberRange(numbers) {
    const filterNumbers = numbers.filter(
      (lottoNumber) => CONSTANTS.lottoMin <= lottoNumber && lottoNumber <= CONSTANTS.lottoMax,
    );
    if (filterNumbers.length !== CONSTANTS.lottoCount) throw ERROR_MESSAGE.isNotInRange;
  }

  #validateDuplicateNumber(numbers) {
    const numberSet = new Set(numbers);
    if ([...numberSet].length !== CONSTANTS.lottoCount) throw ERROR_MESSAGE.isDuplicate;
  }

  get numbers() {
    return this.#numbers;
  }
  // TODO: 추가 기능 구현
}

export default Lotto;
