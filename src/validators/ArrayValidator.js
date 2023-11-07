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
}

export default ArrayValidator;
