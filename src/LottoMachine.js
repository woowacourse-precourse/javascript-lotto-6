import { Random } from '@woowacourse/mission-utils';
import Lotto from './Model/Lotto.js';

class LottoMachine {
  #calculateQuantity(purchaseAmount) {
    return Math.floor(purchaseAmount / 1000);
  }

  #getLottoNumber() {
    return Random.pickNumberInRange(1, 45);
  }

  #generateLottoNumbers() {
    const lottoNumbers = new Set();
    while (lottoNumbers.size < 6) {
      lottoNumbers.add(this.#getLottoNumber());
    }

    return [...lottoNumbers];
  }

  #generateLotto() {
    return new Lotto(this.#generateLottoNumbers());
  }

  getLotto(purchaseAmount) {
    const quantity = this.#calculateQuantity(purchaseAmount);
    const lottoArray = [];

    while (lottoArray.length < quantity) {
      lottoArray.push(this.#generateLotto());
    }

    return lottoArray;
  }
}

export default LottoMachine;
