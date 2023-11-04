import { LOTTO_PRICE } from '../constants/setting.js';

class MoneyValidator {
  static validate(money) {
    this.validateNumber(money);
    this.validateLottoPurchaseAmount(money);
    this.validateLottoAmountExactness(money);
  }

  static validateNumber(money) {
    if (Number.isNaN(money)) {
      throw new Error('[ERROR] 구입금액은 숫자만 입력 가능합니다.');
    }
  }

  static validateLottoPurchaseAmount(money) {
    if (money < LOTTO_PRICE) {
      throw new Error('[ERROR] 구입금액은 1000원 이상만 가능합니다.');
    }
  }

  static validateLottoAmountExactness(money) {
    if (money % LOTTO_PRICE !== 0) {
      throw new Error(
        `[ERROR] 구입금액은 ${LOTTO_PRICE}원 단위로만 가능합니다.`,
      );
    }
  }
}

export default MoneyValidator;
