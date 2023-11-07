import { Console } from '@woowacourse/mission-utils';
import ERROR from '../constant/error.js';

const validator = {
  validatePrice(price) {
    if (!price || price % 1000 !== 0) {
      Console.print(ERROR.NUMBER_INVALID_UNIT);
      throw new Error(ERROR.NUMBER_INVALID_UNIT);
    }
  },

  isDupplicateLottoNumber(numbers) {
    const tempArray = [];
    for (let i = 0; i < numbers.length; i++) {
      if (tempArray.includes(numbers[i])) throw new Error(ERROR.NUMBER_DUPPLICATE);
      else tempArray.push(numbers[i]);
    }
  },

  isValidRangeNumber(numbers) {
    numbers.forEach((number) => {
      if (isNaN(number) || number < 1 || number > 45) throw new Error(ERROR.NUMBER_RANGE);
    });
  },
};

export default validator;
