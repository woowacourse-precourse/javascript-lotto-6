import LottoNumber from './domain/LottoNumber.js';

import { isDuplicated } from './utils/validator.js';

import ERROR_MESSAGE_GENERATOR from './constants/error.js';

import ApplicationError from './exceptions/ApplicationError.js';

class Lotto {
  /**
   * 로또 한 장당 소유할 로또 번호의 갯수입니다.
   * @type {6}
   */
  static NUMBER_QUANTITY = 6;

  static ERROR_MESSAGES = Object.freeze({
    invalidQuantity: '6개의 로또 숫자를 입력해주세요!',
    duplicated: ERROR_MESSAGE_GENERATOR.duplicated('로또 숫자'),
    invalidMatchArg: 'match의 인자에 LottoNumber를 입력해주세요!',
    invalidPrepareArg: 'prepare의 인자에 Lotto를 입력해주세요!',
  });

  /**
   * LottoNumber로 이루어진 배열입니다.
   * @type {LottoNumber[]}
   */
  #numbers;

  /**
   * 로또 한 장당 소유할 로또 번호입니다.
   * @param {number[]} numbers
   */
  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = Array.from(numbers, LottoNumber.valueOf);
  }

  /**
   * @param {number[]} numbers 로또 한 장당 소유할 로또 번호입니다.
   * @returns {Lotto} 생성된 로또입니다.
   */
  static of(numbers) {
    return new Lotto(numbers);
  }

  #validate(numbers) {
    if (isDuplicated(numbers)) {
      throw new ApplicationError(Lotto.ERROR_MESSAGES.duplicated);
    }
    if (numbers.length !== Lotto.NUMBER_QUANTITY) {
      throw new ApplicationError(Lotto.ERROR_MESSAGES.invalidQuantity);
    }
  }

  /**
   * 로또의 numbers를 반환합니다.
   * @returns {LottoNumber[]} 로또의 numbers입니다.
   */
  getNumbers() {
    return Array.from(this.#numbers, (v) => v.getNumber());
  }

  /**
   * 입력받은 `lotto`와 몇 개의 숫자가 같은지 확인랍니다.
   * @param {Lotto} lotto 비교할 로또입니다.
   * @returns {number} 로또의 맞은 갯수입니다.
   */
  prepare(lotto) {
    this.#validatePrepare(lotto);
    return this.#numbers.filter((number) => lotto.match(number)).length;
  }

  #validatePrepare(lotto) {
    if (!(lotto instanceof Lotto)) {
      throw new ApplicationError(Lotto.ERROR_MESSAGES.invalidPrepareArg);
    }
  }

  /**
   * 입력받은 LottoNumber가 numbers에 포함되었는지 비교합니다.
   * @param {LottoNumber} number 비교할 로또 숫자입니다.
   * @returns {boolean} 숫자의 소유 여부입니다.
   */
  match(number) {
    this.#validateMatch(number);
    return this.#numbers.some((lottoNumber) => lottoNumber === number);
  }

  #validateMatch(number) {
    if (!(number instanceof LottoNumber)) {
      throw new ApplicationError(Lotto.ERROR_MESSAGES.invalidMatchArg);
    }
  }
}

export default Lotto;
