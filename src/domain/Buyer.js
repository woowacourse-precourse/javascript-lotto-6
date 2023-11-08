import CustomError from '../CustomError.js';
import { ERROR, LOTTO } from '../Constant.js';
import LottoFactory from './LottoFactory.js';

class Buyer {
  #money;

  #lottos;

  constructor(money) {
    this.#validate(money);
    this.#money = money;
  }

  buyLottos(lottoFactory = new LottoFactory()) {
    this.#lottos = lottoFactory.exchangeLottos(this.#money);
  }

  #validate(money) {
    const REGEX_NUMERIC = /^\d+$/;
    if (!REGEX_NUMERIC.test(money)) {
      throw new CustomError(ERROR.MONEY_NOT_A_NUMBER);
    }
    if (money <= 0) {
      throw new CustomError(ERROR.MONEY_NOT_A_POSITIVE);
    }
    if (money > LOTTO.MONEY_LIMIT) {
      throw new CustomError(ERROR.EXCEED_MONEY_LIMIT);
    }
    if (money % LOTTO.MONEY_UNIT !== 0) {
      throw new CustomError(ERROR.INVALID_MONEY_UNIT);
    }
  }
}

export default Buyer;
