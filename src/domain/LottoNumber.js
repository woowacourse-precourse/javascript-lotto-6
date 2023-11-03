class LottoNumber {
  static MIN_NUMBER = 1;

  static MAX_NUMBER = 45;

  static #numbers = Object.fromEntries(
    Array.from({ length: LottoNumber.MAX_NUMBER - LottoNumber.MIN_NUMBER + 1 }, (_, i) => [
      i + LottoNumber.MIN_NUMBER,
      new LottoNumber(i + 1),
    ]),
  );

  /**
   * @type {number} 로또의 숫자입니다.
   */
  #number;

  /**
   * @param {number} number
   */
  constructor(number) {
    this.#number = number;
  }

  static valueOf(number) {
    return LottoNumber.#numbers[number];
  }

  /**
   * 입력받은 LottoNumber가 같은 인스턴스인지 비교합니다.
   * @param {LottoNumber} number
   */
  equal(number) {
    return this === number;
  }
}

export default LottoNumber;
