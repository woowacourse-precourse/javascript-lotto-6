import ERROR_CODE from '../error/errorCode';

export function checkIsNaN(verifyValue) {
  const parsedValue = Number(verifyValue);
  const IsInputNaN = Number.isNaN(parsedValue);
  if (IsInputNaN) {
    throw new Error(`${ERROR_CODE.valueIsNaN}`);
  }
}

export function checkLottoIsNaN(lotto) {
  lotto.forEach((element) => checkIsNaN(element));
}
