import * as error from '../constant/Error.js';
import { Console } from '@woowacourse/mission-utils';
import * as NUMBER from '../constant/Number.js';

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

      if (Number(purchasePrice) % NUMBER.LOTTO_PRICE !== 0)
        throw new Error(error.PURCHASE_PRICE_NOT_DIVIDE_ERROR);

      return true;
    } catch (error) {
      Console.print(error.message);
      return false;
    }
  },
  async checkWinningNumInputError(numbers) {
    try {
      numbers.split(',').map((num) => {
        num.split('').forEach((ele) => {
          if (!/[0-9]/.test(ele))
            throw new Error(error.WINNING_NUM_NOT_NUMBER_ERROR);
        });
      });
      if (numbers.split(',').length !== NUMBER.LOTTO_COUNT) {
        throw new Error(error.WINNING_NUM_LENGTH_ERROR);
      }
      numbers.split(',').forEach((number) => {
        if (
          !Number(number) >= NUMBER.LOTTO_FIRST_NUMBER &&
          Number(number) <= NUMBER.LOTTO_LAST_NUMBER
        )
          throw new Error(error.WINNING_NUM_OVER_RANGE_ERROR);
      });
      return true;
    } catch (error) {
      Console.print(error.message);
      return false;
    }
  },
  async checkBonusNumInputError(number, winningNumber) {
    try {
      number.split('').forEach((ele) => {
        if (!/[0-9]/.test(ele))
          throw new Error(error.BONUS_NUM_NOT_NUMBER_ERROR);
      });
      if (
        Number(number) < NUMBER.LOTTO_FIRST_NUMBER ||
        Number(number) > NUMBER.LOTTO_LAST_NUMBER
      )
        throw new Error(error.BONUS_NUM_RANGE_OVER_ERROR);
      if (winningNumber.includes(Number(number)))
        throw new Error(error.BONUS_NUM_EQUAL_WINNING_NUM_ERROR);

      return true;
    } catch (error) {
      Console.print(error.message);
      return false;
    }
  },
};

export default InputError;
