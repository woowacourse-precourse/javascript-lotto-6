import { ERROR_MESSAGE } from './constants/Messages.js';
import { LOTTO_RULES, NUMERIC_PATTERN } from './constants/Rules.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#duplicateCheck(numbers);
    this.#numberRangeValidate(numbers);
    this.#numericValidate(numbers);
    this.#integerValidate(numbers);
    this.#numbers = numbers;
  }

  getNumbers() {
    return this.#numbers;
  }

  /**
   * 로또 번호가 개수를 검증합니다.
   * 6개가 아니라면 에러를 발생시킵니다.
   * @param {number[]} numbers
   */
  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.lottoNumber.count);
    }
  }

  // TODO: 추가 기능 구현
  /**
   * 로또 번호의 중복이 있는지 검증합니다.
   * 번호가 중복된다면 에러를 발생시킵니다.
   * @param {number[]} numbers
   */
  #duplicateCheck(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (numbers.length !== uniqueNumbers.size) {
      throw new Error(ERROR_MESSAGE.lottoNumber.duplication);
    }
  }

  /**
   * 로또 번호가 숫자로 이루어져있는지 검증합니다.
   * 숫자가 아니라면 에러를 발생시킵니다.
   * @param {number[]} numbers
   */
  #numericValidate(numbers) {
    numbers.forEach((number) => {
      if (!NUMERIC_PATTERN.test(number)) {
        throw new Error(ERROR_MESSAGE.numericOnly);
      }
    });
  }

  /**
   * 로또 번호가 정수인지 검증합니다.
   * 정수가 아닐 시 에러를 발생시킵니다.
   * @param {number[]} numbers
   */
  #integerValidate(numbers) {
    numbers.forEach((number) => {
      if (!Number.isInteger(number)) {
        throw new Error(ERROR_MESSAGE.lottoNumber.notInt);
      }
    });
  }

  /**
   * 1부터 45 사이의 숫자로 이루어져있는지 검증합니다.
   * 1미만, 45초과일 경우 에러를 발생시킵니다.
   * @param {number[]} numbers
   */
  #numberRangeValidate(numbers) {
    numbers.forEach((number) => {
      if (number < LOTTO_RULES.minNumber || number > LOTTO_RULES.maxNumber) {
        throw new Error(ERROR_MESSAGE.lottoNumber.notInRange);
      }
    });
  }
}

export default Lotto;
