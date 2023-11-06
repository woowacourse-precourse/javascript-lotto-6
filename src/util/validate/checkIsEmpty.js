import { LOTTO_ERROR_CODE, PURCHASE_ERROR_CODE } from '../error/errorCode.js';

export function checkIsEmpty(verifyValue) {
  const isNotValid = verifyValue === '';
  if (isNotValid) {
    throw new Error(`${PURCHASE_ERROR_CODE.valueIsEmpty}`);
  }
}

export function checkLottoIsEmptyOrZero(verifyValue) {
  verifyValue.forEach((element) => {
    if (element === 0 || element === '') {
      throw new Error(`${LOTTO_ERROR_CODE.valueIsEmptyOrZero}`);
    }
  });
}
