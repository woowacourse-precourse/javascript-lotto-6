import { ERROR_MSG } from '../constants.js';

function isThousand(price) {
  if (Number(price) % 1000 === 0) return true;
  return false;
}

function isValidPrice(price) {
  if (Number.isNaN(price)) throw new Error(ERROR_MSG.NOT_NUMBER_ERR);
  if (!isThousand(price)) throw new Error(ERROR_MSG.CURRENCY_UNIT_ERR);
  return true;
}

export default isValidPrice;
