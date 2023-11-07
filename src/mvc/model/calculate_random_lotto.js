import { Random } from '@woowacourse/mission-utils';

class CalculateRandomLotto {
  #lottoQuantity;

  constructor(LOTTO_QUANTITY) {
    this.#lottoQuantity = LOTTO_QUANTITY;
  }

  #createRandomLotto() {
    let lotto = Random.pickUniqueNumbersInRange(1, 45, 6);
    lotto = this.#ascendingSortLotto(lotto);
    return lotto;
  }

  #ascendingSortLotto(lotto) {
    lotto.sort((a, b) => a - b);
    return lotto;
  }

  get randomLotto() {
    const result = [];
    for (let cnt = 0; cnt < this.#lottoQuantity; cnt += 1) {
      const RANDOM_LOTTO = this.#createRandomLotto();
      result.push(RANDOM_LOTTO);
    }
    return result;
  }
}

export default CalculateRandomLotto;
