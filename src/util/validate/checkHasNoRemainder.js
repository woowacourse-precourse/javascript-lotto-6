import { PURCHASE_ERROR_CODE } from '../error/errorCode.js';

export default function checkHasNoRemainder(purchaseAmount) {
  const isNotValid = purchaseAmount % 1000 !== 0;

  if (isNotValid) {
    throw new Error(`${PURCHASE_ERROR_CODE.hasRemainder}`);
  }
}
