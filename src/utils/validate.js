import { ERROR_MESSAGE } from '../constants/messages.js';
import { LOTTO } from '../constants/lotto.js';

function validateNumberType(value) {
  if (Number.isNaN(Number(value))) {
    throw new Error(ERROR_MESSAGE.invalidType);
  }
}

function validateInteger(value) {
  if (!Number.isInteger(value)) {
    throw new Error(ERROR_MESSAGE.invalidInteger);
  }
}

function validateUnit(value) {
  if (value % LOTTO.price !== 0) {
    throw new Error(ERROR_MESSAGE.invalidUnit);
  }
}

function validateLottoLength(numbers) {
  if (numbers.length !== LOTTO.length) {
    throw new Error(ERROR_MESSAGE.invalidLottoLength);
  }
}

function validateLottoRange(number) {
  if (number < LOTTO.range.start || number > LOTTO.range.end) {
    throw new Error(ERROR_MESSAGE.invalidLottoRange);
  }
}

function validateDuplicateNumber(numbers) {
  const numberSet = new Set(numbers);

  if (numberSet.size !== numbers.length) {
    throw new Error(ERROR_MESSAGE.duplicateLottoNumber);
  }
}

function validateMinimumAmount(amount) {
  if (amount < LOTTO.price) {
    throw new Error(ERROR_MESSAGE.invalidAmount);
  }
}

function validateExistingNumber(number, numbers) {
  if (numbers.includes(number)) {
    throw new Error(ERROR_MESSAGE.invalidBonusNumber);
  }
}

function validateLotto(numbers) {
  validateLottoLength(numbers);
  numbers.forEach((number) => {
    validateNumberType(number);
    validateLottoRange(number);
    validateInteger(number);
  });
  validateDuplicateNumber(numbers);
}

function validatePurchaseAmount(amount) {
  validateNumberType(amount);
  validateMinimumAmount(amount);
  validateUnit(amount);
}

function validateBonusNumber(value, winningNumbers) {
  validateNumberType(value);
  const bonusNumber = Number(value);
  validateInteger(bonusNumber);
  validateLottoRange(bonusNumber);
  validateExistingNumber(bonusNumber, winningNumbers);
}

export { validateBonusNumber, validatePurchaseAmount, validateLotto };
