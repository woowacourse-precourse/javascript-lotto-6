import { Console, Random } from '@woowacourse/mission-utils';
import { Validation } from './Validation.js';
import { LOTTO_RULE, INPUT_MESSAGES, ERROR_MESSAGES } from './Constants.js';
import { CustomError } from './CustomError.js';

class BuyLotto {
  constructor() {
    this.inputPrice = null;
    this.lottoCount = 0;
  }

  async initialize() {
    this.inputPrice = await Console.readLineAsync(INPUT_MESSAGES.BUY_INPUT);
    this.lottoCount = this.inputPrice / LOTTO_RULE.UNIT;
  }

  getLottoCount() {
    return this.lottoCount;
  }

  async alertBuyLotto() {
    // 구매 금액 오류 확인 
    if (!Validation.isNumber(lottoPrice)) {
      throw new CustomError(ERROR_MESSAGES.BUY.NO_NUMBER);
    }
    if (!Validation.isPositive(lottoPrice)) {
      throw new CustomError(ERROR_MESSAGES.BUY.NO_POSITIVE);
    }
    if (!Validation.isMultiple(this.inputPrice, LOTTO_RULE.UNIT)) {
      throw new CustomError(ERROR_MESSAGES.BUY.BUY_UNIT);
    }

    return this.getLottoCount;
  }
}
export default BuyLotto;
