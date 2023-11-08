import { Random } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, MAX, MIN, PRICE } from '../constant/lottoConstants';

class LottoMachine {
  #lottos = [];

  constructor(purchaseAmount) {
    this.#validator(purchaseAmount);
    this.#generateLottoNumbers(purchaseAmount);
  }

  #validator(purchaseAmount) {
    if (Number.isNaN(Number(purchaseAmount))) {
      throw ERROR_MESSAGE.NOT_A_NUMBER;
    }

    if (purchaseAmount % PRICE.LOTTO !== 0) {
      throw ERROR_MESSAGE.NOT_DIVISIBLE;
    }
  }

  #generateLottoNumbers(purchaseAmount) {
    const lottoTickets = purchaseAmount / PRICE.LOTTO;

    for (let i = 0; i < lottoTickets; i += 1) {
      this.#lottos
        .push(Random.pickUniqueNumbersInRange(MIN.LOTTO_NUMBER, MAX.LOTTO_NUMBER, MAX.LOTTO_NUMBERS)
        .sort((a, b) => a - b));
    }
  }

  getLottos() {
    return this.#lottos;
  }
}

export default LottoMachine;
