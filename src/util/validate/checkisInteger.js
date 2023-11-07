import { LOTTO_ERROR_CODE } from '../error/errorCode.js';

export function checkIsInteger(verifyValue) {
  const isNotInteger = !Number.isInteger(verifyValue);

  if (isNotInteger) {
    throw new Error(`${LOTTO_ERROR_CODE.valueIsNotInteger}`);
  }
}

export function checkLottoIsInteger(list) {
  list.forEach((element) => {
    checkIsInteger(element);
  });
}
