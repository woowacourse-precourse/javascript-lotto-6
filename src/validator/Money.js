import { MONEY_ERROR } from '../constants/message/error.js';
import { LOTTO } from '../constants/setting.js';
import CommonValidator from './Common.js';

class MoneyValidator {
  static validate(money) {
    CommonValidator.validateIsNumber(money);
    this.validateLottoPurchaseAmount(money);
    this.validateLottoAmountExactness(money);
  }

  static validateLottoPurchaseAmount(money) {
    if (money < LOTTO.price) {
      throw new Error(MONEY_ERROR.purchaseAmount);
    }
  }

  static validateLottoAmountExactness(money) {
    if (money % LOTTO.price !== LOTTO.noRemainder) {
      throw new Error(MONEY_ERROR.amountExactness);
    }
  }
}

export default MoneyValidator;
