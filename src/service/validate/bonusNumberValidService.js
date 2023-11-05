import { checkIsEmpty } from '../../util/validate/checkIsEmpty.js';
import checkIsInWinningNumber from '../../util/validate/checkIsInWinningNumber.js';
import { checkIsNaN } from '../../util/validate/checkIsNaN';
import { checkNumberIsNotInRange } from '../../util/validate/checkIsNotInRange';
import { checkIsInteger } from '../../util/validate/checkisInteger';

export default async function bonusNumberValidService(verifyValue, winningNumber) {
  try {
    checkIsEmpty(verifyValue);
    checkIsNaN(verifyValue);
    checkIsInteger(verifyValue);
    checkNumberIsNotInRange(verifyValue);
    checkIsInWinningNumber(verifyValue, winningNumber);
  } catch (error) {
    throw new Error(error.message);
  }
}
