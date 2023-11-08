class Validator {
  isValidValue(value) {
    this.checkIsInteger(value);
    this.checkIsEmptyInput(value);
    return true;
  }

  checkIsEmptyInput(value) {
    if (this.isEmptyInput(value)) {
      throw new Error('[ERROR] : 빈 문자열을 입력하지 마세요.');
    }
  }

  isEmptyInput(value) {
    const regexp = /^[\s]*$/;
    if (value.trim().length === 0 || regexp.test(value)) return true;
    return false;
  }

  checkIsInteger(value) {
    if (!this.isInteger(value)) {
      throw new Error('[ERROR] : 숫자 이외의 값을 입력하지 마세요.');
    }
  }

  isInteger(num) {
    return Number.isInteger(Number(num));
  }
}

export default Validator;
