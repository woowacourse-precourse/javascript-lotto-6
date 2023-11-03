import checkHasNoRemainder from '../../util/validate/checkHasNoRemainder.js';
import checkIsEmpty from '../../util/validate/checkIsEmpty.js';
import { checkIsNaN } from '../../util/validate/checkIsNaN.js';

export default async function purchaseValidService(input) {
  try {
    checkIsEmpty(input);
    checkIsNaN(input);
    checkHasNoRemainder(input);

    const result = input / 1000;
    return result;
  } catch (error) {
    const errorMessage = error.message;
    throw new Error(errorMessage);
  }
}
