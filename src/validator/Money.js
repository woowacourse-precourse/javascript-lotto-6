import { MONEY_ERROR } from '../constants/message/error.js';
import { LOTTO } from '../constants/setting.js';

class MoneyValidator {
  static validate(money) {
    this.validateNumber(money);
    this.validateLottoPurchaseAmount(money);
    this.validateLottoAmountExactness(money);
  }

  static validateNumber(money) {
    if (Number.isNaN(money)) {
      throw new Error(MONEY_ERROR.number);
    }
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
