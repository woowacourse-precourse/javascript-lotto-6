class Format {
  /**
   * 돈 포맷
   * @param {number} number
   * @returns {string}
   */
  static money(number) {
    const formatted = new Intl.NumberFormat('ko-KR').format(number);
    return `${formatted}원`;
  }

  /**
   * 배열 포맷
   * @param {number[]} arr
   * @returns {string}
   */
  static array(arr) {
    return `[${arr.join(', ')}]`;
  }

  /**
   * 수익률 포맷
   * @param {number} rate
   * @returns {string}
   */
  static rate(rate) {
    return `${rate.toFixed(1)}%`;
  }
}

export default Format;
