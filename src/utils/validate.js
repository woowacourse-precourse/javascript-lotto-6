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

export { validateNumberType, validateUnit };
