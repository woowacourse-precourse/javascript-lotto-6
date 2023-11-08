// 각 인풋의 유효성 검사는 이 클래스의 메서드 조합으로 한다.
class InputValidator {
  static isArrayHaveNan(arr) {
    return arr.some((el) => InputValidator.isNan(el));
  }

  static isNan(input) {
    return Number.isNaN(Number(input));
  }

  static isDuplicated(arr) {
    const set = new Set(arr);

    return set.size !== arr.length;
  }

  /**
   * 숫자가 범위 이내인지 확인하는 함수
   * @param {Number []} range
   * @param {Number} num
   * @returns Boolean
   */
  static isNotInRange([start, end], num) {
    return start > num || end < num;
  }

  static isNegativeNumber(num) {
    return num < 0;
  }
}

export default InputValidator;
