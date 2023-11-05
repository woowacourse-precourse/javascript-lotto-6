class Validation {
  static isNumber(value) {
    const regEx = /^[1-9]\d*$/;
    if(!value.match(regEx)) throw new Error('[ERROR] 구입 금액은 0으로 시작하지 않는 숫자 형식입니다.');
  }
}

export default Validation;