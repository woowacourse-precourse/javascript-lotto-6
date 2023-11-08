import Validator from '../validators/Validator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validator.validateLottoNumbers(numbers);
  }

  /**
   * 검증된 6개의 당첨 번호 반환
   * @returns {number[]}
   */
  getWinningNumbers() {
    return this.#numbers;
  }

  /**
   * 검증된 유저의 6개의 로또 번호 반환
   * @returns {number[]}
   */
  getUserLotto() {
    return this.#numbers;
  }
}

export default Lotto;
