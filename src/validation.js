import { ERROR_MESSAGE } from './Constants';
import { Purchase } from './Purchase';
import Purchase from './Purchase';

function validateAmount(purchaseAmount) {
  if (purchaseAmount === undefined || purchaseAmount === null) {
    throw new Error(ERROR_MESSAGE.NUMBER_ERROR);
  }
  const numericAmount = parseFloat(purchaseAmount);
  if (isNaN(numericAmount || numericAmount % 1000 !== 0)) {
    throw new Error(ERROR_MESSAGE.AMOUNT_ERROR);
  }
  return numericAmount;
}

export default validateAmount;
