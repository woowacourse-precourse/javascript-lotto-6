import { Console } from '@woowacourse/mission-utils';
import { isNumber } from '../common/validate.js';
import { ERROR_MSG } from '../constants.js';

function isThousand(price) {
  if (Number(price) % 1000 === 0) return true;
  return false;
}

function isValidPrice(price) {
  if (!isNumber(price)) {
    Console.print(ERROR_MSG.NOT_NUMBER_ERR);
    return false;
  }
  if (!isThousand(price)) {
    Console.print(ERROR_MSG.CURRENCY_UNIT_ERR);
    return false;
  }
  return true;
}

export default isValidPrice;
