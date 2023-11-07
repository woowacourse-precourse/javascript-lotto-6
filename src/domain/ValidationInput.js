import { ERROR } from '../constants/Error';
import { MagicNumber } from '../constants/MagicNumber';

export function validAmount(amount) {
  if (!Number(amount)) {
    throw new Error(ERROR.amountNumber);
  }
  if (amount < MagicNumber.lottoPriceMin) {
    throw new Error(ERROR.amountRange);
  }
  if (amount % MagicNumber.lottoPriceMin !== 0) {
    throw new Error(ERROR.amountUnit);
  }
}

export function validBonusNumber(bonusNumber) {
  if (!Number(bonusNumber)) {
    throw new Error(ERROR.bonusNumber);
  }
  if (
    bonusNumber < MagicNumber.lottoNumberMin ||
    bonusNumber > MagicNumber.lottoNumberMax
  ) {
    throw new Error(ERROR.bonusRange);
  }
}
