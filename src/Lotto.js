import InputError from './errors/InputError.js';
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    const set = new Set();
    for (const num of numbers) {
      if (set.has(num)) {
        throw new InputError('중복된 숫자가 존재합니다.');
      }
      set.add(num);
    }
  }

  // TODO: 추가 기능 구현
  printLotto() {
    return this.#numbers;
  }
}

export default Lotto;
