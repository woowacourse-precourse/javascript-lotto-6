import Validatable from './Validatable';

class CustomArray extends Validatable {
  /**
   * @param {unknown[]} value
   */
  constructor(value) {
    if (!Array.isArray(value)) throw new TypeError('배열이 아닙니다.');
    super(value);
  }

  /**
   * 값이 배열인지 검사하는 메서드
   * @returns {boolean} 배열인지 여부
   */
  isArray() {
    return Array.isArray(this.value);
  }

  /**
   * count개의 요소를 가진 배열인지 검사하는 메서드
   * @param {number} count 요소의 개수
   * @returns {boolean} count개의 요소를 가진 배열인지 여부
   */
  isArrayOfLength(count) {
    return this.isArray() && this.value.length === count;
  }

  /**
   * 정렬된 배열인지 검사하는 메서드
   * @param {'asc' | 'desc'} order 정렬 순서
   * @returns {boolean} 정렬된 배열인지 여부
   */
  isSortedArray(order) {
    if (!this.isArray()) {
      return false;
    }

    const sorted = [...this.value].sort((a, b) => a - b);
    const isEqual = JSON.stringify(sorted) === JSON.stringify(this.value);

    return order === 'asc' ? isEqual : !isEqual;
  }

  /**
   * 중복된 요소가 없는 배열인지 검사하는 메서드
   * @returns {boolean} 중복된 요소가 없는 배열인지 여부
   */
  isUniqueArray() {
    if (!this.isArray()) {
      return false;
    }
    const set = new Set(this.value);

    return set.size === this.value.length;
  }

  /**
   * 배열 내의 모든 요소가 범위 내의 정수인지 검사하는 메서드
   * @param {number} from 범위의 시작
   * @param {number} to 범위의 끝
   * @returns {boolean} 배열 내의 모든 요소가 범위 내의 정수인지 여부
   */
  isInRange(from, to) {
    return this.isArray() && this.value.every((element) => element >= from && element <= to);
  }
}

export default CustomArray;
