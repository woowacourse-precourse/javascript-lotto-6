import { ERROR } from '../constants/Error';
import { MAGIC_NUMBER } from '../constants/MagicNumber';

export function validAmount(amount) {
  if (!Number(amount)) {
    throw new Error(ERROR.amountNumber);
  }
  if (amount < MAGIC_NUMBER.lottoPriceMin) {
    throw new Error(ERROR.amountRange);
  }
  if (amount % MAGIC_NUMBER.lottoPriceMin !== 0) {
    throw new Error(ERROR.amountUnit);
  }
}

export function validBonusNumber(bonusNumber) {
  if (!Number(bonusNumber)) {
    throw new Error(ERROR.bonusNumber);
  }
  if (
    bonusNumber < MAGIC_NUMBER.lottoNumberMin ||
    bonusNumber > MAGIC_NUMBER.lottoNumberMax
  ) {
    throw new Error(ERROR.bonusRange);
  }
}
