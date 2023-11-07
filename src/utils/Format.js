class Format {
  /**
   * 개수 포맷
   * @param {number} count
   * @returns {string}
   */
  static count(count) {
    return `${count}개`;
  }

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
   * 일치 개수 포맷
   * @param {number} matches
   * @returns {string}
   */
  static lottoMatches(matches) {
    return `${Format.count(matches)} 일치`;
  }
}

export default Format;
