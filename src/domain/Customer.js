import CustomError from '../CustomError.js';
import { ERROR, LOTTO } from '../Constant.js';
import LottoFactory from './LottoFactory.js';

class Customer {
  #money;

  #lottos; // @type {Array<Lotto>}

  #prizes;

  constructor(money) {
    this.#validate(money);
    this.#money = money;
  }

  getLottos() {
    return this.#lottos;
  }

  buyLottos(lottoFactory = new LottoFactory()) {
    this.#lottos = lottoFactory.exchangeLottos(this.#money);
  }

  receivePrizes(lottoResult) {
    this.#prizes = lottoResult.countPrizes(this.#lottos);
    return this.#prizes;
  }

  calcProfitRate() {
    const rewards = this.#prizes.reduce((acc, { prize, cnt }) => {
      if (cnt > 0) {
        return acc + prize.getRewards() * cnt;
      }
      return acc;
    }, 0);

    return rewards / this.#money;
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

export default Customer;
