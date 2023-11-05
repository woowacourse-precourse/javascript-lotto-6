import { Random } from '@woowacourse/mission-utils';
import { ERROR, LOTTO } from './Constant';

class BuyLotto {
  #price;
  lottos;

  constructor(price) {
    this.#validatePrice(price);
    this.#price = Number(price);
    this.lottos = [];
    this.#setLottos();
  }

  #validatePrice(price) {
    if (!price || !price.trim || LOTTO.REG_NUMBER.test(price)) {
      throw new Error(ERROR.INPUT_ONLY_NUMBER);
    }
    if (Number(price) % LOTTO.PRICE > 0) {
      throw new Error(ERROR.NOT_PRICE_UNIT);
    }
  }

  #getLottoQuantity() {
    return this.#price / LOTTO.PRICE;
  }

  #setLottos() {
    const quantity = this.#getLottoQuantity();
    for (let i = 0; i < quantity; i++) {
      this.lottos.push(this.#getLottoNumbers());
    }
  }

  #getLottoNumbers() {
    const lottoNumbers = new Set();
    while (lottoNumbers.size < LOTTO.LOTTO_LENGHT) {
      lottoNumbers.add(Random.pickNumberInRange(1, 45));
    }

    return Array.from(lottoNumbers).sort((a, b) => a - b);
  }

  getLottos() {
    return this.lottos;
  }
}

export default BuyLotto;
