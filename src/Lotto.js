import {
  isDuplication,
  isEmptyString,
  isNumber,
  isNumberInValidScope,
} from './utils/validators/index.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.map(Number);
  }

  #validate(numbers) {
    if (numbers.some(isEmptyString)) throw new Error('[ERROR] 빈문자열은 입력하실 수 없습니다. ');
    if (!numbers.every(isNumber)) throw new Error('[ERROR] 숫자이외의 문자가 존재합니다.');
    if (isDuplication(numbers)) throw new Error('[ERROR] 중복되는 숫자가 존재합니다.');
    if (!numbers.some(isNumberInValidScope)) {
      throw new Error('ERROR] 숫자 1~45 만 입력이 가능합니다.');
    }

    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  static of(numbers) {
    return new Lotto(numbers);
  }
}

export default Lotto;
