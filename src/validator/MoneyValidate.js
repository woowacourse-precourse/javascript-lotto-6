import { LOTTO_PRICE } from '../constants/LottoConstants.js';
import {
  ERRMSG_MONEY_NOT_MONEY,
  ERRMSG_MONEY_NOT_DIVIDED_BY_LOTTO_PRICE,
} from '../constants/ErrorMessage.js';

export const isMoney = (money) => {
  if (!Number.isInteger(money)) throw new Error(ERRMSG_MONEY_NOT_MONEY);
};

export const isDividedByLottoPrice = (money) => {
  if (money % LOTTO_PRICE !== 0)
    throw new Error(ERRMSG_MONEY_NOT_DIVIDED_BY_LOTTO_PRICE);
};
