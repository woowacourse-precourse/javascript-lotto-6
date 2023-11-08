class ErrorMessages {
  static invalidInput(message) {
    return `[ERROR] ${message}`;
  }

  static lottoNumbersDuplicate() {
    return '[ERROR] 중복된 로또번호는 있을 수 없습니다.';
  }

  static bonusNumberError() {
    return '[ERROR] 보너스 번호는 로또번호와 달라야 합니다.';
  }

  static lottoFormatError() {
    return '[ERROR] 로또 형식에 부합하지 않습니다.';
  }

  static lottoNumberRangeError() {
    return '[ERROR] 1~45 사이 수를 입력하세요';
  }
}

export default ErrorMessages;
