import { PURCHASE_ERROR_CODE } from '../error/errorCode.js';

export function checkPurchaseIsNotInRange(input) {
  const inputValue = Number(input);
  const isTooSmall = inputValue < 1000;
  if (isTooSmall) {
    throw new Error(`${PURCHASE_ERROR_CODE.valueIsTooSmall}`);
  }
}

export function checkLottoIsNotInRange(input) {
  return input;
}
