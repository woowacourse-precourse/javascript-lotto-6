class ErrorMessages {
  static invalidInput(message) {
    return `[ERROR] ${message}`;
  }

  static lottoNumbersDuplicate() {
    return "[ERROR] 중복된 로또번호는 있을 수 없습니다.";
  }

  static bonusNumberError() {
    return "[ERROR] 보너스 번호는 로또번호와 달라야 합니다.";
  }
}

export default ErrorMessages;
