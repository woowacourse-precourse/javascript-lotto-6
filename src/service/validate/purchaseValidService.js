import divideInput from '../../util/parse/divideInput.js';
import checkHasNoRemainder from '../../util/validate/checkHasNoRemainder.js';
import checkIsEmpty from '../../util/validate/checkIsEmpty.js';
import { checkIsNaN } from '../../util/validate/checkIsNaN.js';
import checkIsTooSmall from '../../util/validate/checkIsTooSmall.js';

export default async function purchaseValidService(input) {
  try {
    checkIsEmpty(input);
    checkIsTooSmall(input);
    checkIsNaN(input);
    checkHasNoRemainder(input);

    const result = divideInput(input);
    return result;
  } catch (error) {
    const errorMessage = error.message;
    throw new Error(errorMessage);
  }
}
