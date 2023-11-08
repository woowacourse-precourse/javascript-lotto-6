import { Random } from '@woowacourse/mission-utils';
import { num } from './Constants.js';

import Lotto from './Lotto.js';

class LottosList {
  #lottosList = [];
  #lottoAmount;

  constructor(purchaseAmount) {
    this.calculateLottoAmount(purchaseAmount);
    this.addLottosToList();
  }

  calculateLottoAmount(purchaseAmount) {
    return (this.#lottoAmount = purchaseAmount / num.LOTTO_PRICE);
  }

  produceNewLotto() {
    const numbers = Random.pickUniqueNumbersInRange(
      num.LOTTO_LOWER_LIMIT,
      num.LOTTO_UPPER_LIMIT,
      num.LOTTO_NUMBERS_QUANTITY
    );

    return new Lotto(numbers);
  }

  addLottosToList() {
    for (let i = 0; i < this.#lottoAmount; i++) {
      const newLotto = this.produceNewLotto().numbersArray;
      this.#lottosList.push(newLotto);
    }
  }

  get lottosList() {
    return this.#lottosList;
  }

  get lottoAmount() {
    return this.#lottoAmount;
  }
}

export default LottosList;
