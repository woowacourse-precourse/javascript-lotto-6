class Validation {
  static isNumber(value) {
    const regEx = /^[1-9]\d*$/;
    if(!value.match(regEx)) throw new Error('[ERROR] 구입 금액은 0으로 시작하지 않는 숫자 형식입니다.');
  }

  static isDivisible(num) {
    if(num % 1000 !== 0) throw new Error('[ERROR] 구입 금액은 1000원 단위로 입력해야 합니다.')
  }
}

export default Validation;