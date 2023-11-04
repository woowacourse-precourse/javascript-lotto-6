import { Console } from '@woowacourse/mission-utils';
import ERROR from '../constant/error';

const validator = {
  validatePrice(price) {
    if (!price || price % 1000 !== 0) {
      Console.print(ERROR.NUMBER_INVALID_UNIT);
      throw new Error(ERROR.NUMBER_INVALID_UNIT);
    }
  },
};

export default validator;
