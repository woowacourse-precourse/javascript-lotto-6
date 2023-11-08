class ErrorMessages {
  static invalidInput(message) {
    return `[ERROR] ${message}`;
  }

  static lottoNumbersDuplicate() {
    return "[ERROR] 중복된 로또번호는 있을 수 없습니다.";
  }
}

export default ErrorMessages;
