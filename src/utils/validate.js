import { ERROR_MESSAGE } from '../constants/messages.js';
import { LOTTO } from '../constants/lotto.js';

function validateNumberType(value) {
  if (Number.isNaN(Number(value))) {
    throw new Error(ERROR_MESSAGE.invalidType);
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

function validateLottoRange(numbers) {
  numbers.forEach((number) => {
    if (number < LOTTO.range.start || number > LOTTO.range.end) {
      throw new Error(ERROR_MESSAGE.invalidLottoRange);
    }
  });
}

function validateDuplicateNumber(numbers) {
  const numberSet = new Set(numbers);

  if (numberSet.size !== numbers.length) {
    throw new Error(ERROR_MESSAGE.duplicateLottoNumber);
  }
}

export {
  validateNumberType,
  validateUnit,
  validateLottoLength,
  validateLottoRange,
  validateDuplicateNumber,
};
