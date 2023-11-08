import { UNIT, RANGE_START, RANGE_END, BALL_NUMBERS, ERROR } from '../constant/Constant.js';

class Validation {
  static isPriceBadUnit(price) {
    if (price % UNIT !== 0) throw new Error(ERROR.PRICE_NOT_THOUSAND);
  }

  static isPriceNull(price) {
    if (price === 0) throw new Error(ERROR.PRICE_NULL);
  }

  static isPriceNotNumber(price) {
    if (isNaN(price)) throw new Error(ERROR.PRICE_NOT_NUMBER);
  }

  static isLottoBadFormat(lotto) {
    if (lotto.length !== BALL_NUMBERS) throw new Error(ERROR.LOTTO_BAD_FORMAT);
    lotto.forEach((number) => {
      if (isNaN(number)) throw new Error(ERROR.LOTTO_BAD_FORMAT);
    });
  }

  static isLottoNotUnique(lotto) {
    const lottoSet = new Set(lotto);
    if (lottoSet.size !== lotto.length) throw new Error(ERROR.LOTTO_NOT_UNIQUE);
  }

  static isLottoBadRange(lotto) {
    lotto.forEach((number) => {
      if (number < RANGE_START || number > RANGE_END) throw new Error(ERROR.LOTTO_BAD_RANGE);
    })
  }

  static isBonusNotNumber(bonus) {
    if (isNaN(bonus)) throw new Error(ERROR.BONUS_NOT_NUMBER);
  }

  static isBonusBadRange(bonus) {
    if (bonus < RANGE_START || bonus > RANGE_END) throw new Error(ERROR.BONUS_BAD_RANGE);
  }
}

export default Validation;