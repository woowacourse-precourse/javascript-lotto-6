class Validation {
  static isNumber(value, errorMsg) {
    const regEx = /^[1-9]\d*$/;
    if(!value.match(regEx)) throw new Error(errorMsg);
  }

  static isDivisible(num) {
    if(num % 1000 !== 0) throw new Error('[ERROR] 구입 금액은 1000원 단위로 입력해야 합니다.');
  }
}

export default Validation;