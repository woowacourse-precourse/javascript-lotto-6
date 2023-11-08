import {
  LOTTO_LENGTH,
  MAX_LOTTO_NUMBER,
  MIN_LOTTO_NUMBER,
} from '../utils/constants.js';
import {
  checkValueIsDuplicate,
  checkValueIsNumber,
} from '../utils/checkValue.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validateLength(numbers);
    this.#validateDuplicate(numbers);
    this.#validateType(numbers);
    this.#validateRange(numbers);
    this.#numbers = numbers;
  }

  #validateLength(numbers) {
    if (numbers.length !== LOTTO_LENGTH) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }
  #validateDuplicate(numbers) {
    if (checkValueIsDuplicate(numbers)) {
      throw new Error('[ERROR] 중복된 번호가 있습니다.');
    }
  }
  #validateType(numbers) {
    numbers.forEach((number) => {
      if (!checkValueIsNumber(number)) {
        throw new Error('[ERROR] 당첨 번호는 숫자만 가능합니다.');
      }
    });
  }
  #validateRange(numbers) {
    numbers.forEach((number) => {
      if (number < MIN_LOTTO_NUMBER || number > MAX_LOTTO_NUMBER) {
        throw new Error('[ERROR] 1에서 45 사이의 숫자를 입력해주세요.');
      }
    });
  }

  getLotto() {
    return this.#numbers;
  }
}

export default Lotto;
