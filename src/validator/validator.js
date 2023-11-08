// -구매 금액
// 1000 미만일 경우
// 1000으로 나눠 떨어지지 않는 경우
// -당첨 번호
// 1~45 범위의 값이 아닐 경우
// 값이 6개가 아닐 경우
// 중복값이 있을 경우
// -보너스 번호
// 1~45 범위의 값이 아닐 경우
// 앞의 당첨번호와 중복이 있을 경우
// -공통 예외 처리
// 숫자가 아닌 경우

class Validator {
  static isNotNumber(number) {
    if (this.isNumber(number)) {
      throw new Error('[ERROR] 숫자값을 입력해주세요.');
    }
  }

  static isNumber(input) {
    const regexr = /^\d+$/;
    return !regexr.test(input);
  }
}

export default Validator;
