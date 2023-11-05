import { checkIsEmpty } from '../../util/validate/checkIsEmpty.js';
import { checkIsNaN } from '../../util/validate/checkIsNaN';
import { checkNumberIsNotInRange } from '../../util/validate/checkIsNotInRange';
import { checkIsInteger } from '../../util/validate/checkisInteger';

export default async function bonusNumberValidService(verifyValue) {
  try {
    checkIsEmpty(verifyValue);
    checkIsNaN(verifyValue);
    checkIsInteger(verifyValue);
    checkNumberIsNotInRange(verifyValue);
  } catch (error) {
    throw new Error(error.message);
  }
}
