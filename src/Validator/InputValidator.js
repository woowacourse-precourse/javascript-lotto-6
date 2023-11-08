import OPTION from '../constants/option.js';
import MESSAGE from '../constants/message.js';
import InputError from '../error/InputError.js';

class InputValidator {
  static validate(condition, errorMessage) {
    if (!condition) {
      throw new InputError(errorMessage);
    }
  }

  static isPurchaseAmountPositiveInteger(purchaseAmount) {
    InputValidator.validate(
      Number.isSafeInteger(purchaseAmount) && purchaseAmount > 0,
      MESSAGE.error.purchaseAmountMustBePositiveInteger,
    );
  }

  static isPurchaseAmountInAmountUnit(purchaseAmount) {
    InputValidator.validate(
      purchaseAmount % OPTION.lotto.amountUnit === 0,
      MESSAGE.error.purchaseAmountMustBeInAmountUnit,
    );
  }

  static isBonusNumberInRange(number) {
    InputValidator.validate(
      number >= OPTION.lotto.minLottoNumber &&
        number <= OPTION.lotto.maxLottoNumber,
      MESSAGE.error.bonuseNumberMustBeInRange,
    );
  }

  static isBonusNumberUnique(number, winningNumbers) {
    InputValidator.validate(
      !winningNumbers.includes(number),
      MESSAGE.error.bonusNumberMustBeUnique,
    );
  }

  static isLottoNumbersInRange(numbers) {
    const inRange = (number) =>
      number >= OPTION.lotto.minLottoNumber &&
      number <= OPTION.lotto.maxLottoNumber;

    InputValidator.validate(
      numbers.every(inRange),
      MESSAGE.error.lottoNumbersMustBeInRange,
    );
  }

  static isLottoNumbersInLength(numbers) {
    InputValidator.validate(
      numbers.length === OPTION.lotto.lottoLength,
      MESSAGE.error.lottoNumbersMustBeLottoLength,
    );
  }

  static isLottoNumbersUnique(numbers) {
    InputValidator.validate(
      numbers.length === new Set(numbers).size,
      MESSAGE.error.lottoNumbersMustBeUnique,
    );
  }
}

export default InputValidator;
