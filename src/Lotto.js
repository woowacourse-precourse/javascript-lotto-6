import LottoNumber from './domain/LottoNumber.js';

class Lotto {
  #numbers;

  /**
   *
   * @param {number[]} numbers
   */
  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = Array.from(numbers, LottoNumber.valueOf);
  }

  static of(numbers) {
    return new Lotto(numbers);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  /**
   *
   * @param {LottoNumber} number
   */
  match(number) {
    return this.#numbers.some((lottoNumber) => lottoNumber === number);
  }
}

export default Lotto;
