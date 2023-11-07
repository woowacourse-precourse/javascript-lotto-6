import { MONEY_ERROR } from '../constants/message/error.js';
import { LOTTO } from '../constants/setting.js';
import InputError from '../error/InputError.js';
import CommonValidator from './CommonValidator.js';

class MoneyValidator {
  static validate(money) {
    CommonValidator.validateIsNumber(money);
    this.validateLottoPurchaseAmount(money);
    this.validateLottoAmountExactness(money);
  }

  static validateLottoPurchaseAmount(money) {
    if (money < LOTTO.price) {
      throw new InputError(MONEY_ERROR.purchaseAmount);
    }
  }

  static validateLottoAmountExactness(money) {
    if (money % LOTTO.price !== LOTTO.noRemainder) {
      throw new InputError(MONEY_ERROR.amountExactness);
    }
  }
}

export default MoneyValidator;
