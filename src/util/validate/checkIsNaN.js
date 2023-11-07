import { PURCHASE_ERROR_CODE } from '../error/errorCode.js';

export function checkIsNaN(verifyValue) {
  const parsedValue = Number(verifyValue);
  const IsInputNaN = Number.isNaN(parsedValue);

  if (IsInputNaN) {
    throw new Error(`${PURCHASE_ERROR_CODE.valueIsNaN}`);
  }
}

export function checkLottoIsNaN(lotto) {
  lotto.forEach((element) => checkIsNaN(element));
}
