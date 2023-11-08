import ERROR_MESSAGE from '../constants/error.js';
import { LOTTO_COUNT, LOTTO_RANGE } from '../constants/number.js';
import TypeValidator from './TypeValidator.js';

class ArrayValidator {
  /**
   * count개의 요소를 가진 배열인지 검사하는 메서드
   * @param {any[]} value 검사할 배열
   * @param {number} count 요소의 개수
   * @returns {boolean} count개의 요소를 가진 배열인지 여부
   */
  static isArrayOfLength(value, count) {
    return TypeValidator.isArray(value) && value.length === count;
  }

  /**
   * 정렬된 배열인지 검사하는 메서드
   * @param {any[]} value 검사할 배열
   * @param {'asc' | 'desc'} order 정렬 순서
   * @returns {boolean} 정렬된 배열인지 여부
   */
  static isSortedArray(value, order = 'asc') {
    if (!TypeValidator.isArray(value)) {
      return false;
    }

    const sorted = [...value].sort((a, b) => a - b);
    const isEqual = JSON.stringify(sorted) === JSON.stringify(value);

    return order === 'asc' ? isEqual : !isEqual;
  }

  /**
   * 중복된 요소가 없는 배열인지 검사하는 메서드
   * @param {any[]} value 검사할 배열
   * @returns {boolean} 중복된 요소가 없는 배열인지 여부
   */
  static isUniqueArray(value) {
    if (!TypeValidator.isArray(value)) {
      return false;
    }
    const set = new Set(value);

    return set.size === value.length;
  }

  /**
   * 배열 내의 모든 요소가 범위 내의 정수인지 검사하는 메서드
   * @param {any[]} value 검사할 배열
   * @param {{ from: number, to: number }} {from, to} 범위의 시작과 범위의 끝
   * @returns {boolean} 배열 내의 모든 요소가 범위 내의 정수인지 여부
   */
  static isInRange(value, { from, to }) {
    return (
      TypeValidator.isArray(value) && value.every((element) => element >= from && element <= to)
    );
  }

  /**
   * 로또 번호를 검사하는 메서드
   * @param {number[]} numbers 검사할 로또 번호
   * @returns {string} 에러 메시지
   */
  static validateLottoNumbers(numbers) {
    let message = '';

    if (!this.isArrayOfLength(numbers, LOTTO_COUNT)) message = ERROR_MESSAGE.NOT_IN_LOTTO_COUNT;
    if (!this.isUniqueArray(numbers)) message = ERROR_MESSAGE.DUPLICATED_NUMBER;
    if (!this.isSortedArray(numbers)) message = ERROR_MESSAGE.NOT_SORTED;
    if (!this.isInRange(numbers, LOTTO_RANGE)) message = ERROR_MESSAGE.NOT_IN_RANGE;

    return message;
  }
}

export default ArrayValidator;
