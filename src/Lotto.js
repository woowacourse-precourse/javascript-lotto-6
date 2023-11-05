import { isDuplication, isNumber, isNumberInValidScope } from './utils/validators/index.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.map(Number);
  }

  #validate(numbers) {
    if (!numbers.every(isNumber)) throw new Error('[ERROR] 숫자이외의 문자가 존재합니다.');
    if (isDuplication(numbers)) throw new Error('[ERROR] 중복되는 숫자가 존재합니다.');
    if (!numbers.every((number) => isNumberInValidScope(number))) {
      throw new Error('[ERROR] 숫자 1~45 만 입력이 가능합니다.');
    }

    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  static of(numbers) {
    return new Lotto(numbers);
  }

  checkUniqueNumber(number) {
    if (this.#numbers.includes(number)) {
      throw new Error(`[ERROR] ${number}는 당첨 번호에 이미 포함되어 있습니다.`);
    }
  }

  calculateResult(userLotto, bonus) {
    const count = userLotto.reduce((acc, cur) => {
      if (this.#numbers.includes(cur)) return acc + 1;

      return acc;
    }, 0);

    if (count === 5 && userLotto.includes(bonus)) {
      return count + 2;
    }

    return count;
  }
}

export default Lotto;
