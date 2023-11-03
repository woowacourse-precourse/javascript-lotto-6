import ERROR_CODE from '../error/errorCode.js';

export default function checkIsEmpty(verifyValue) {
  const isNotValid = verifyValue === '';
  if (isNotValid) {
    throw new Error(ERROR_CODE.valueIsEmpty);
  }
}
