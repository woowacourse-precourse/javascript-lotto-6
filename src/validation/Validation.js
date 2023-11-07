import { UNIT, RANGE_START, RANGE_END, BALL_NUMBERS, PRICE_TYPE, BONUS_TYPE, ERROR } from '../constant/Constant.js';

class Validation {
  static isPriceBadUnit(price) {
    if (price % UNIT !== 0) throw new Error(ERROR.PRICE_NOT_THOUSAND);
  }

  static isPriceNull(price) {
    if (price === 0) throw new Error(ERROR.PRICE_NULL);
  }

  static isPriceNotNumber(price) {
    if (typeof price !== PRICE_TYPE) throw new Error(ERROR.PRICE_NOT_NUMBER);
  }

  static isLottoBadFormat(lotto) {
    if (lotto.length !== BALL_NUMBERS) throw new Error(ERROR.LOTTO_BAD_FORMAT);
    lotto.forEach((number) => {
      if (number === NaN) throw new Error(ERROR.LOTTO_BAD_FORMAT);
    });
  }

  static isLottoBadRange(lotto) {
    lotto.forEach((number) => {
      if (number < RANGE_START || number > RANGE_END) throw new Error(ERROR.LOTTO_BAD_RANGE);
    })
  }

  static isBonusNotNumber(bonus) {
    if (typeof bonus !== BONUS_TYPE) throw new Error(ERROR.BONUS_NOT_NUMBER);
  }

  static isBonusBadRange(bonus) {
    if (bonus < RANGE_START || bonus > RANGE_END) throw new Error(ERROR.BONUS_BAD_RANGE);
  }
}

export default Validation;