import { ERROR_MSG } from '../constants.js';
import { isNumber, isOneToFourtyfiveNumber, isDuplicatedNumber } from '../common/validate.js';

function isValidBonusNumber(winningNumbers, bonusNumber) {
  if (!isNumber(bonusNumber)) throw new Error(ERROR_MSG.NOT_NUMBER_ERR);
  if (!isOneToFourtyfiveNumber(bonusNumber)) throw new Error(ERROR_MSG.ONE_TO_FOURTYFIVE_ERR);
  if (isDuplicatedNumber(winningNumbers, bonusNumber)) throw new Error(ERROR_MSG.DUPLICATE_ERR);
  return true;
}

export default isValidBonusNumber;
