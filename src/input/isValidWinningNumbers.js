import { Console } from '@woowacourse/mission-utils';
import { isDuplicatedList, isNumber, isOneToFourtyfiveNumber, isSixNumber } from '../common/validate.js';
import { ERROR_MSG } from '../constants.js';

function isValidWinningNumbers(numbers) {
  if (!isSixNumber(numbers)) {
    Console.print(ERROR_MSG.NOT_SIX_NUMBER);
    return false;
  }
  for (let i = 0; i < numbers.length; i += 1) {
    if (!isNumber(numbers[i])) {
      Console.print(ERROR_MSG.NOT_NUMBER_ERR);
      return false;
    }
    if (!isOneToFourtyfiveNumber(numbers[i])) {
      Console.print(ERROR_MSG.ONE_TO_FOURTYFIVE_ERR);
      return false;
    }
  }
  if (isDuplicatedList(numbers)) {
    Console.print(ERROR_MSG.DUPLICATE_ERR);
    return false;
  }
  return true;
}

export default isValidWinningNumbers;
