import * as error from '../constant/Error.js';
import { Console } from '@woowacourse/mission-utils';

const InputError = {
  async checkPriceInputError(purchasePrice) {
    try {
      purchasePrice.split('').forEach((ele, idx) => {
        if (idx === 0 && ele === '-')
          throw new Error(error.PURCHASE_PRICE_NOT_POSITIVE_ERROR);
        if (!/[0-9]/.test(Number(ele)))
          throw new Error(error.PURCHASE_PRICE_NOT_NUMBER_ERROR);
      });

      if (purchasePrice === null || purchasePrice === '')
        throw new Error(error.PURCHASE_PRICE_NOTHING_ERROR);

      if (Number(purchasePrice) % 1000 !== 0)
        throw new Error(error.PURCHASE_PRICE_NOT_DIVIDE_ERROR);

      return true;
    } catch (e) {
      Console.print(e);
      return false;
    }
  },
};

export default InputError;
