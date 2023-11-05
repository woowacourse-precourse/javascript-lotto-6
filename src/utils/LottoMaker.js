import { LOTTO_PRICE } from '../constants/numbers.js';
import { ERROR_MESSAGE } from '../constants/messages.js';
import InputValidator from './InputValidator.js';
import ValidationError from './ValidationError.js';

class LottoMaker {
  calcLottoPublishCount(price) {
    return price / LOTTO_PRICE;
  }

  validatePublishCount(count) {
    if (InputValidator.checkNaN(count)) {
      throw new ValidationError(ERROR_MESSAGE.isNaN);
    }
    if (!InputValidator.checkInteger(count)) {
      throw new ValidationError(ERROR_MESSAGE.notDividedPrice);
    }
    if (!InputValidator.checkPositiveNumber(count)) {
      throw new ValidationError(ERROR_MESSAGE.negativePrice);
    }
  }
}

export default LottoMaker;
