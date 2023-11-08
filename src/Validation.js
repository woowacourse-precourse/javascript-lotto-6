const Validation = {
  /**
   * @param {number} number
   * @returns {boolean}
   */
  isNaturalNumber: (number) => number >= 1 && number % 1 === 0,

  /**
   * @param {number} number
   * @returns {boolean}
   */
  isInRange: (number) => number >= 1 && 45,

  /**
   * @param {number} number
   */
  validationLottoNumber: (number) => {
    if (!this.isNaturalNumber(number)) {
      throw new Error("[ERROR] 로또 번호는 1 이상의 정수만 입력해 주세요.");
    }
    if (!this.isInRange(number)) {
      throw new Error("[ERROR] 1이상 45 이하의 로또 번호를 입력해 주세요.");
    }
  },
};
