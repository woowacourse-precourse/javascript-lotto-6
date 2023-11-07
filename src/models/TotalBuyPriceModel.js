import CONFIG from '../constants/config.js';
import ERROR_MESSAGES from '../constants/errorMessage.js';
import { checkNumberType } from '../utils/numberUtils.js';
import throwError from '../utils/throwError.js';

class TotalBuyPriceModel {
  #price;

  constructor(number) {
    this.#validate(number);
    this.#price = number;
  }

  // prettier-ignore
  #validate(number) {
    number % CONFIG.lottoPrice && throwError(ERROR_MESSAGES.buyLottoPriceError);

    !checkNumberType(number) && throwError(ERROR_MESSAGES.numberTypeError);

    number < CONFIG.lottoPrice && throwError(ERROR_MESSAGES.buyLottoPriceError);
  }

  getPrice() {
    return this.#price;
  }
}

export default TotalBuyPriceModel;
