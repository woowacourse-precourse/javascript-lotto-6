class LottoValidator {
  static validate(numbers) {
    LottoValidator.validateCount(numbers);
    LottoValidator.validateDuplication(numbers);
    LottoValidator.validateRange(numbers);
  }

  static validateCount(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  static validateDuplication(numbers) {
    const uniqueNumbers = new Set(numbers);

    if (uniqueNumbers.size !== numbers.length) {
      throw new Error('[ERROR] 로또 번호는 중복될 수 없습니다.');
    }
  }

  static validateRange(numbers) {
    numbers.forEach(number => LottoValidator.validateLottoNumber(number));
  }

  static validateLottoNumber(number) {
    if (number < 1 || number > 45) {
      throw new Error(
        '[ERROR] 로또 번호는 1이상 45이하의 숫자로 구성되어야 합니다.',
      );
    }
  }
}

export default LottoValidator;
