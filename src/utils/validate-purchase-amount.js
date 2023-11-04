import { errorConstants, magicNumber } from '../constants/index.js';

export default function validatePurchaseAmount(purchaseAmount) {
  // 숫자인지 체크
  if (isNaN(purchaseAmount)) throw new Error(errorConstants.NOT_A_NUMBER);
  // 공백 체크
  if (/\s/.test(String(purchaseAmount)))
    throw new Error(errorConstants.NOT_EMPTY);
  // 1000단위 체크
  if (purchaseAmount % magicNumber.UNIT !== magicNumber.ZERO)
    throw new Error(errorConstants.WRONG_UNIT);
}
