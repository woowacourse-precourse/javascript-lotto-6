import { LOTTO_ERROR_CODE, PURCHASE_ERROR_CODE } from '../error/errorCode.js';

export function checkPurchaseIsNotInRange(input) {
  const inputValue = Number(input);
  const isTooSmall = inputValue < 1000;
  if (isTooSmall) {
    throw new Error(`${PURCHASE_ERROR_CODE.valueIsTooSmall}`);
  }
}

export function checkNumberIsNotInRange(number) {
  const isOutOfRange = number < 1 || number > 45;
  if (isOutOfRange) {
    throw new Error(`${LOTTO_ERROR_CODE.valueIsOutOfRange}`);
  }
}

export function checkLottoIsOutOfRange(list) {
  list.forEach((element) => checkNumberIsNotInRange(element));
}
