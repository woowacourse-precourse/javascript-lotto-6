import InputError from './errors/InputError.js';
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#duplicate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }
  #duplicate(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== 6) {
      throw new Error('[ERROR] 로또 번호가 중복됩니다.');
    }
  }

  // TODO: 추가 기능 구현
  printLotto() {
    return this.#numbers;
  }
}

export default Lotto;
