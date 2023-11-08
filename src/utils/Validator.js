import CONSTANTS from '../constants/constants.js';
import ERROR from '../constants/error.js';

class Validator {
  static validatePurchaseAmount(purchaseAmount) {
    const validators = [
      this.invalidNumber,
      this.remainderNotZero,
      this.missingValue,
      this.negativeNumber,
    ];
    validators.forEach(validator => validator(purchaseAmount));
  }

  static validateWinningNumbers(winningNumbers) {
    const validators = [
      this.invalidSeparator,
      this.invalidNumbersCount,
      this.invalidRange,
      this.invalidWinningNumbers,
    ];
    validators.forEach(validator => validator(winningNumbers));
  }

  static validateBonusNumber(bonusNumber) {
    const validators = [this.missingValue, this.invalidNumber, this.invalidNumberRange];
    validators.forEach(validator => validator(bonusNumber));
  }

  static validateLotto(numbers) {
    const validators = [this.invalidLottoNumberCount, this.duplicatedLottoNumber];
    validators.forEach(validator => validator(numbers));
  }

  static remainderNotZero(purchaseAmount) {
    if (purchaseAmount % CONSTANTS.purchaseAmount.amountDivisor !== 0)
      throw new Error(ERROR.message.remainderNotZero);
  }

  static invalidNumber(number) {
    if (!Number(number)) throw new Error(ERROR.message.invalidNumber);
  }

  static invalidWinningNumbers(winningNumbers) {
    winningNumbers.forEach(number => {
      if (!Number(number)) throw new Error(ERROR.message.invalidNumber);
    });
  }

  static missingValue(value) {
    if (!value) throw new Error(ERROR.message.missingValue);
  }

  static negativeNumber(purchaseAmount) {
    if (purchaseAmount < 0) throw new Error(ERROR.message.negativeNumber);
  }

  static invalidSeparator(numbers) {
    if (numbers.includes('')) throw new Error(ERROR.message.invalidSeparator);
  }

  static invalidNumbersCount(numbers) {
    if (numbers.length !== CONSTANTS.number.count)
      throw new Error(ERROR.message.invalidNumbersCount);
  }

  static invalidNumberRange(number) {
    if (Number(number) < CONSTANTS.number.min || Number(number) > CONSTANTS.number.max)
      throw new Error(ERROR.message.invalidRange);
  }

  static invalidRange(numbers) {
    numbers.forEach(number => {
      if (Number(number) < CONSTANTS.number.min || Number(number) > CONSTANTS.number.max)
        throw new Error(ERROR.message.invalidRange);
    });
  }

  static invalidLottoNumberCount(lottoNumbers) {
    if (lottoNumbers.length !== CONSTANTS.number.count)
      throw new Error(ERROR.message.invalidLottoNumberCount);
  }

  static duplicatedLottoNumber(lottoNumbers) {
    if (lottoNumbers.length !== new Set(lottoNumbers).size)
      throw new Error(ERROR.message.duplicatedLottoNumber);
  }
}

export default Validator;
