import { LOTTO_LENGTH } from '../constants/LottoConstants.js';
import {
  ERRMSG_LOTTO_NOT_VALID_LOTTO_LENGTH,
  ERRMSG_LOTTO_NOT_MADE_WITH_UNIQUE_NUMBER,
} from '../constants/ErrorMessage.js';

export const isValidLottoLength = (length) => {
  if (length !== LOTTO_LENGTH)
    throw new Error(ERRMSG_LOTTO_NOT_VALID_LOTTO_LENGTH);
};

export const isMadeWithUniqueNumber = (numbers, bonusNumber = undefined) => {
  const uniquenessChecker = new Set(numbers);
  if (bonusNumber) uniquenessChecker.add(bonusNumber);

  const neededLength = bonusNumber ? LOTTO_LENGTH + 1 : LOTTO_LENGTH;
  if (uniquenessChecker.size !== neededLength)
    throw new Error(ERRMSG_LOTTO_NOT_MADE_WITH_UNIQUE_NUMBER);
};
