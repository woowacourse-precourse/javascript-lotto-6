class ErrorMessage {
  static invalidAmount() {
    return "[ERROR] 로또 구입 금액은 1,00원 단위로 입력해주세요.";
  }
  static invalidBlank() {
    return "[ERROR] 숫자를 입력해주세요.";
  }
  static invalidRange() {
    return "[ERROR] 1 ~ 45 사이의 번호를 입력해주세요.";
  }
  static invalidWinningNumbersCount() {
    return "[ERROR] 6개의 숫자를 입력해주세요.";
  }
  static invalidNaN() {
    return "[ERROR] 숫자가 잘못된 형식입니다.";
  }
  static invalidDuplicateLottoNumbers() {
    return "[ERROR] 로또 번호는 중복이 없어야 합니다.";
  }
  static invalidBonusNumberCount() {
    return "[ERROR] 보너스 번호는 1개만 입력해주세요.";
  }
}

export default ErrorMessage;