class Validate {
  // 구입금액 입력 예외 검사
  // 구입금액 1000원 단위
  static checkUnitOf1000(input) {
    if (input % 1000 !== 0) return true;
    return false;
  }

  // 당첨번호 입력 예외 검사
  // 1~45 범위 내의 자연수와 쉼표인지 확인
  static checkNaturalNumAndComma(input) {
    const regex = /^[1-9,]+$/;
    for (let i = 0; i < input.length; i++) {
      if (!regex.test(input[i])) return true;
    }
    return false;
  }

  static checkNumRange1to45(input) {
    if (input.length > 45 || input.length < 1) return true;
    return false;
  }

  // 숫자 중복 확인
  static checkDuplicateNum(input) {
    if (input.length !== new Set(input).size) return true;
    return false;
  }

  // 6개의 숫자를 입력했는지 확인
  static checkInput6Num(input) {
    if (input.length !== 6) return true;
    return false;
  }
}

module.exports = Validate;
