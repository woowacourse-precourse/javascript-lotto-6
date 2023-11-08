const WinningNumbersValidation = {

  /**
   * 당첨 번호에 대하여 유효성검사를 수행한다.
   * @param {string} value 당첨 번호
   */
  validate(value) {
    this.checkIsLengthSix(value);
    this.checkIsNumeric(value);
    this.checkIsInteger(value);
    this.checkIsValidRange(value);
    this.checkIsUnique(value);
  },

  /** @throws 배열의 길이가 6이 아니라면 에러를 발생시킨다. */
  checkIsLengthSix(value) {
    // TODO: 상수 사용
    if (value.length !== 6) {
      throw new Error('in checkIsLengthSix');
    }
  },

  /** @throws 숫자가 아닌 값이 포함되어 있다면 에러를 발생시킨다. */
  checkIsNumeric(value) {
    value.forEach((item) => {
      if (isNaN(item)) {
        // TODO: 상수 사용
        throw new Error('in checkNonNumeric');
      }
    });
  },

  /** @throws 정수가 아닌 값이 포함되어 있다면 에러를 발생시킨다. */
  checkIsInteger(value) {
    value.forEach((item) => {
      if (!Number.isInteger(Number(item))) {
        // TODO: 상수 사용
        throw new Error('in checkIsInteger');
      }
    });
  },

  /** @throws 1~45 밖의 값이 포함되어 있다면 에러를 발생시킨다. */
  checkIsValidRange(value) {
    value.forEach((item) => {
      if (Number(item) < 1 || Number(item) > 45) {
        // TODO: 상수 사용
        throw new Error('in checkIsValidRange');
      }
    });
  },

  /** @throws 중복된 값이 포함되어 있다면 에러를 발생시킨다. */
  checkIsUnique(value) {
    if (value.length !== new Set(value).size) {
      // TODO: 상수 사용
      throw new Error('in checkIsUnique');
    }
  }
}

export default WinningNumbersValidation;
