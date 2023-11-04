import { validateConstants, magicNumber } from '../constants/index.js';

const validatePurchaseAmount = (purchaseAmount) => {
  // 숫자인지 체크
  if (isNaN(purchaseAmount)) throw new Error(validateConstants.NOT_A_NUMBER);
  // 공백 체크
  if (/\s/.test(String(purchaseAmount)))
    throw new Error(validateConstants.NOT_EMPTY);
  // 1000단위 체크
  if (purchaseAmount % magicNumber.UNIT !== magicNumber.ZERO)
    throw new Error(validateConstants.WRONG_UNIT);
};

export default validatePurchaseAmount;
