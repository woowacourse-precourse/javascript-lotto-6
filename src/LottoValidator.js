import ValidationUtils from "./utils/ValidationUtils.js";
import { LOTTO_CONFIG } from "./constants.js";
import { ERROR_MESSAGE } from "./message.js";
class LottoValidator {
  static validateMoneyInput(userMoneyInput) {
    ValidationUtils.validateNotNull(userMoneyInput, ERROR_MESSAGE.moneyIsNull);
    ValidationUtils.validateIsNumber(
      userMoneyInput,
      ERROR_MESSAGE.lottoNumberIsNull
    );
    ValidationUtils.validateIsMultipleOf(
      userMoneyInput,
      LOTTO_CONFIG.price,
      ERROR_MESSAGE.invalidMoneyUnit(LOTTO_CONFIG.price)
    );
  }

  static validateLottoNumbersInput(lottoNumbers) {
    ValidationUtils.validateLength(
      lottoNumbers,
      LOTTO_CONFIG.numberLength,
      ERROR_MESSAGE.invalidTargetLottoNumberLength(LOTTO_CONFIG.numberLength)
    );
    lottoNumbers.forEach((number) => {
      ValidationUtils.validateIsNumber(number, ERROR_MESSAGE.lottoNumberIsNull);
      ValidationUtils.validateInRange(
        number,
        LOTTO_CONFIG.minNumber,
        LOTTO_CONFIG.maxNumber,
        ERROR_MESSAGE.invalidNumberRange(
          LOTTO_CONFIG.minNumber,
          LOTTO_CONFIG.maxNumber
        )
      );
    });
    ValidationUtils.validateNotDuplicate(
      lottoNumbers,
      ERROR_MESSAGE.duplicateTargetLottoNumbers
    );
  }

  static validateBonusNumber(lottoNumbers, bonusNumber) {
    ValidationUtils.validateIsNumber(
      bonusNumber,
      ERROR_MESSAGE.lottoNumberIsNull
    );
    ValidationUtils.validateIsNotIncluded(
      lottoNumbers,
      bonusNumber,
      ERROR_MESSAGE.invalidBonusNumber
    );
  }

  static validateLottoDomain(lottoNumbers) {
    ValidationUtils.validateLength(
      lottoNumbers,
      LOTTO_CONFIG.numberLength,
      ERROR_MESSAGE.invalidLottoNumberLength(LOTTO_CONFIG.numberLength)
    );

    ValidationUtils.validateNotDuplicate(
      lottoNumbers,
      ERROR_MESSAGE.duplicateLottoNumbers
    );
    lottoNumbers.forEach((number) => {
      ValidationUtils.validateIsNumber(
        number,
        ERROR_MESSAGE.notIntegerLottoNumber
      );
      ValidationUtils.validateInRange(
        number,
        LOTTO_CONFIG.minNumber,
        LOTTO_CONFIG.maxNumber,
        ERROR_MESSAGE.lottoNumberRange(
          LOTTO_CONFIG.minNumber,
          LOTTO_CONFIG.maxNumber
        )
      );
    });
  }

  static validateTargetLottoDomain(lottoNumbers, bonusNumber) {
    ValidationUtils.validateLength(
      lottoNumbers,
      LOTTO_CONFIG.numberLength,
      ERROR_MESSAGE.invalidTargetLottoNumberLength(LOTTO_CONFIG.numberLength)
    );

    ValidationUtils.validateNotDuplicate(
      lottoNumbers,
      ERROR_MESSAGE.duplicateTargetLottoNumbers
    );

    ValidationUtils.validateIsNotIncluded(
      lottoNumbers,
      bonusNumber,
      ERROR_MESSAGE.invalidBonusNumber
    );
    lottoNumbers.forEach((number) => {
      ValidationUtils.validateIsNumber(
        number,
        ERROR_MESSAGE.notIntegerTargetLottoNumber
      );
      ValidationUtils.validateInRange(
        number,
        LOTTO_CONFIG.minNumber,
        LOTTO_CONFIG.maxNumber,
        ERROR_MESSAGE.targetLottoNumberRange(
          LOTTO_CONFIG.minNumber,
          LOTTO_CONFIG.maxNumber
        )
      );
    });
  }
}

export default LottoValidator;
