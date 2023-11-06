import divideInput from '../../util/parse/divideInput.js';
import checkHasNoRemainder from '../../util/validate/checkHasNoRemainder.js';
import { checkIsEmpty } from '../../util/validate/checkIsEmpty.js';
import { checkIsNaN } from '../../util/validate/checkIsNaN.js';
import { checkPurchaseIsNotInRange } from '../../util/validate/checkIsNotInRange.js';

export default async function purchaseValidService(input) {
  try {
    checkIsEmpty(input);
    checkIsNaN(input);
    checkPurchaseIsNotInRange(input);
    checkHasNoRemainder(input);

    const result = divideInput(input);
    return result;
  } catch (error) {
    const errorMessage = error.message;
    throw new Error(errorMessage);
  }
}
