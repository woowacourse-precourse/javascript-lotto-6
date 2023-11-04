class CommonValidator {
  static validateLottoNumber(number) {
    if (number < 1 || number > 45) {
      throw new Error(
        '[ERROR] 로또 번호는 1이상 45이하의 숫자로 구성되어야 합니다.',
      );
    }
  }
}

export default CommonValidator;
