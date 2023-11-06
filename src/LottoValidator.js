import ValidationUtils from "./utils/ValidationUtils.js";

class LottoValidator {
  static validateMoneyInput(userMoneyInput) {
    ValidationUtils.validateNotNull(
      userMoneyInput,
      "[ERROR] 금액을 입력해 주세요"
    );
    ValidationUtils.validateIsNumber(
      userMoneyInput,
      "[ERROR] 숫자를 입력해 주세요"
    );
    ValidationUtils.validateIsMultipleOf(
      userMoneyInput,
      1000,
      "[ERROR] 금액은 1000원 단위로 입력해 주세요"
    );
  }

  static validateLottoNumbersInput(lottoNumbers) {
    ValidationUtils.validateLength(
      lottoNumbers,
      6,
      "[ERROR] 당첨 로또 번호는 6개여야 합니다."
    );
    lottoNumbers.forEach((number) => {
      ValidationUtils.validateIsNumber(number, "[ERROR] 숫자를 입력해 주세요");
      ValidationUtils.validateInRange(
        number,
        1,
        45,
        "[ERROR] 1~45 사이의 숫자를 입력해 주세요"
      );
    });
    ValidationUtils.validateNotDuplicate(
      lottoNumbers,
      "[ERROR] 당첨 로또 번호는 중복되지 않아야 합니다."
    );
  }

  static validateBonusNumber(lottoNumbers, bonusNumber) {
    ValidationUtils.validateIsNumber(
      bonusNumber,
      "[ERROR] 숫자를 입력해 주세요"
    );
    ValidationUtils.validateIsNotIncluded(
      lottoNumbers,
      bonusNumber,
      "[ERROR] 보너스 번호는 당첨 번호에 포함될 수 없습니다."
    );
  }

  static validateLottoDomain(lottoNumbers) {
    ValidationUtils.validateLength(
      lottoNumbers,
      6,
      "[ERROR] 로또 번호는 6개여야 합니다."
    );

    ValidationUtils.validateNotDuplicate(
      lottoNumbers,
      "[ERROR] 로또 번호는 중복되지 않아야 합니다."
    );
    lottoNumbers.forEach((number) => {
      ValidationUtils.validateIsNumber(number, "[ERROR] 숫자를 입력해 주세요");
      ValidationUtils.validateInRange(
        number,
        1,
        45,
        "[ERROR] 로또는 1~45 사이의 숫자로 구성되어야 합니다"
      );
    });
  }

  static validateTargetLottoDomain(lottoNumbers, bonusNumber) {
    ValidationUtils.validateLength(
      lottoNumbers,
      6,
      "[ERROR] 당첨 로또 번호는 6개여야 합니다."
    );

    ValidationUtils.validateNotDuplicate(
      lottoNumbers,
      "[ERROR] 당첨 로또 번호는 중복되지 않아야 합니다."
    );

    ValidationUtils.validateIsNotIncluded(
      lottoNumbers,
      bonusNumber,
      "[ERROR] 보너스 번호는 당첨 번호에 포함될 수 없습니다."
    );
    lottoNumbers.forEach((number) => {
      ValidationUtils.validateIsNumber(
        number,
        "[ERROR] 당첨 로또는 정수로 구성되어야 합니다"
      );
      ValidationUtils.validateInRange(
        number,
        1,
        45,
        "[ERROR] 당첨 로또는 1~45 사이의 숫자로 구성되어야 합니다"
      );
    });
  }
}

export default LottoValidator;
