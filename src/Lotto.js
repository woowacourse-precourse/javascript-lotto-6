import commonValidator from './validator/commonValidator.js';
const BONUS_NUMBER_PRIFIX_MESSAGE = '로또 번호는';
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#validateSixLength(numbers);
    this.#validateDuplicated(numbers);
    this.#validateRangeNumber(numbers);
    this.#validateNumberType(numbers);
  }

  #validateSixLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error('로또 번호는 6개여야 합니다.');
    }
  }

  #validateDuplicated(numbers) {
    commonValidator.checkDuplicate(BONUS_NUMBER_PRIFIX_MESSAGE, numbers);
  }

  #validateRangeNumber(numbers) {
    numbers.forEach((number) =>
      commonValidator.checkLottoNumberRange(BONUS_NUMBER_PRIFIX_MESSAGE, number)
    );
  }

  #validateNumberType(numbers) {
    numbers.forEach((number) =>
      commonValidator.checkNumberType(BONUS_NUMBER_PRIFIX_MESSAGE, number)
    );
  }

  getAscendingNumber() {
    return [...this.#numbers].sort((a, b) => a - b);
  }
}

export default Lotto;
