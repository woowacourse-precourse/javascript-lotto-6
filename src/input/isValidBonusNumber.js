import { Console } from '@woowacourse/mission-utils';
import { ERROR_MSG } from '../constants.js';
import { isNumber, isOneToFourtyfiveNumber, isDuplicatedNumber } from '../common/validate.js';

function isValidBonusNumber(winningNumbers, bonusNumber) {
  if (!isNumber(bonusNumber)) {
    Console.print(ERROR_MSG.NOT_NUMBER_ERR);
    return false;
  }
  if (!isOneToFourtyfiveNumber(bonusNumber)) {
    Console.print(ERROR_MSG.ONE_TO_FOURTYFIVE_ERR);
    return false;
  }
  if (isDuplicatedNumber(winningNumbers, bonusNumber)) {
    Console.print(ERROR_MSG.DUPLICATE_ERR);
    return false;
  }
  return true;
}

export default isValidBonusNumber;
