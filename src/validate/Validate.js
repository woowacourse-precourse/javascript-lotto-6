import { LOTTO_PRICE, MAX_LOTTO_NUMBER, MIN_LOTTO_NUMBER } from '../constants/lotto.js'
import ValidationError from '../errors/ValidationError.js'

class Validate {
  /**
   *
   * @param {number} value
   * @returns boolean
   */
  static isNumber(value) {
    return !isNaN(value)
  }

  /**
   *
   * @param {number} value
   * @returns boolean
   */
  static isLottoNumber(value) {
    if (!Validate.isNumber(value)) {
      return false
    }

    return value >= MIN_LOTTO_NUMBER && value <= MAX_LOTTO_NUMBER
  }

  /**
   *
   * @param {number} value
   * @returns boolean
   */
  static isLottoPrice(value) {
    if (!Validate.isNumber(value)) {
      return false
    }

    return value % LOTTO_PRICE === 0
  }

  /**
   *
   * @param {number[]} numbers
   * @returns boolean
   */
  static isDuplicateLottoNumbers(numbers) {
    return new Set(numbers).size !== numbers.length
  }

  static isBonusNumber(bonusNumber, numbers) {
    return numbers.includes(bonusNumber)
  }

  /**
   *
   * @param {number} value
   * @throws {ValidationError} 로또 가격은 1000원 단위로 입력해주세요.
   */
  static validLottoPrice(value) {
    if (!Validate.isLottoPrice(value)) {
      throw new ValidationError('로또 가격은 1000원 단위로 입력해주세요.')
    }
  }

  /**
   * @param {number} value
   * @throws {ValidationError} 로또 번호는 1~45 사이의 숫자만 가능합니다.
   */
  static validLottoNumber(value) {
    if (!Validate.isLottoNumber(value)) {
      throw new ValidationError('로또 번호는 1~45 사이의 숫자만 가능합니다.')
    }
  }

  /**
   *
   * @param {number[]} numbers
   * @throws {ValidationError} 로또 번호는 중복될 수 없습니다.
   */
  static validLottoNumbers(numbers) {
    if (Validate.isDuplicateLottoNumbers(numbers)) {
      throw new ValidationError('로또 번호는 중복될 수 없습니다.')
    }

    numbers.forEach((number) => {
      Validate.validLottoNumber(number)
    })
  }

  /**
   *
   * @param {number} bonusNumber
   * @param {number[]} numbers
   * @throws {ValidationError} 보너스 번호는 로또 번호와 중복될 수 없습니다.
   */
  static validBonusNumber(bonusNumber, numbers) {
    if (!Validate.isBonusNumber(bonusNumber, numbers)) {
      throw new ValidationError('보너스 번호는 로또 번호와 중복될 수 없습니다.')
    }

    if (!Validate.isDuplicateLottoNumbers(numbers.concat(bonusNumber))) {
      throw new ValidationError('보너스 번호는 로또 번호와 중복될 수 없습니다.')
    }
  }
}

export default Validate
