class Exception {

  // 구입 금액 입력 예외처리
  validateBuyLotto(input) {
    if (isNaN(input)) {
      throw new Error("숫자를 입력해 주세요.");
    }

    if ((input % 1000 !== 0)) {
      throw new Error("천 원 단위로 입력해 주세요.");
    }

    if (!input) {
      throw new Error("구입할 금액을 입력해 주세요.");
    }

    return input;
  }

  // 보너스 번호 입력 예외처리
  validBonusInput(winningNum, input) {
    if (winningNum.includes(Number(input))) {
      throw new Error("당첨 번호와 중복된 번호입니다.");
    }

    if (isNaN(input)) {
      throw new Error("숫자를 입력해 주세요.");
    }

    if (!input) {
      throw new Error("보너스 번호를 입력해 주세요.");
    }

    return input;
  }
}

export default Exception;