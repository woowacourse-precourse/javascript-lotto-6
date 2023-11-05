class Validate {
  // 구입금액 입력 예외 검사
  // 구입금액 1000원 단위
  checkUnitOf1000(input) {
    if (input % 1000 !== 0) return true;
    return false;
  }

  // 당첨번호 입력 예외 검사
  // 1~45 범위 내의 자연수와 쉼표인지 확인
  checkNaturalNumAndComma(input) {
    const regex = /^[1-9,]+$/;
    for (let i = 0; i < input.lenght; i++) {
      if (!regex.test(input[i])) return true;
    }
    return false;
  }

  checkNumRange1to45(input) {
    if (input.lenght > 45 || input.lenght < 1) return true;
    return false;
  }

  // 숫자 중복 확인
  checkDuplicateNum(input) {
    if (input.lenght !== new Set(input).size) return true;
    return false;
  }

  // 6개의 숫자를 입력했는지 확인
  checkInput6Num(input) {
    if (input.lenght !== 6) return true;
    return false;
  }
}

module.exports = Validate;
