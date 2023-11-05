import { newLottoGenerator } from '../utils/newLottoGenerator.js';
import LottoError from '../errors/LottoError.js';
import { ERROR_MESSAGES } from '../constants/errorMessages.js';

class Lotto {
  /**
   * @member {number} LOTTO_LENGTH 로또가 가질 수 있는 숫자 갯수
   * @member {number} MIN_NUM 로또가 가질 수 있는 숫자의 최소값
   * @member {number} MAX_NUM 로또가 가질 수 있는 숫자의 최대값
   */

  static LOTTO_LENGTH = 6;

  static MIN_NUM = 1;

  static MAX_NUM = 45;

  /**
   * @type {[number, number, number, number, number, number]}
   */

  #numbers;

  /**
   *
   * @param {[number, number, number, number, number, number]} numbers
   */
  constructor(numbers) {
    this.#numbers = numbers.sort((a, b) => a - b);
    this.validate();
  }

  static getRandomNums() {
    const lottoNums = newLottoGenerator(Lotto.MIN_NUM, Lotto.MAX_NUM, Lotto.LOTTO_LENGTH);

    return new Lotto(lottoNums);
  }

  /**
   *
   * @param {number} lottoAmount
   * @returns { number[] }
   */

  static getPurchasedLottos(lottoAmount) {
    return [...Array(lottoAmount)].map(() => Lotto.getRandomNums());
  }

  toStringFromNumbers() {
    return `[${this.#numbers.join(', ')}]`;
  }

  validate() {
    this.validateLength();
    this.validateDuplication();
  }

  validateLength() {
    if (this.#numbers.length !== Lotto.LOTTO_LENGTH) {
      throw new LottoError(ERROR_MESSAGES.lotto_not_match_length);
    }
  }

  validateDuplication() {
    if (this.#numbers.length !== new Set(this.#numbers).size) {
      throw new LottoError(ERROR_MESSAGES.lotto_have_duplication_number);
    }
  }
}

export default Lotto;
