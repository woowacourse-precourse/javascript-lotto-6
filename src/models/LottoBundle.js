import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import { OPTIONS } from '../constants/options.js';

class LottoBundle {
  #lottoBundle;

  constructor(amount) {
    this.#lottoBundle = this.#createLottoBundle(amount);
  }

  getLottoBundle() {
    return this.#lottoBundle;
  }

  #createLottoBundle(amount) {
    const lottos = [];

    let currentAmount = 0;
    while (currentAmount < amount) {
      const lotto = this.#generateLotto();
      lottos.push(lotto);
      currentAmount += 1;
    }

    return lottos;
  }

  #generateLotto() {
    const numbers = Random.pickUniqueNumbersInRange(
      OPTIONS.minNumber,
      OPTIONS.maxNumber,
      OPTIONS.length,
    );

    return new Lotto(numbers);
  }

  populateWinResult(winLotto, matchedNumberList) {
    this.#lottoBundle.forEach((lotto) => {
      const matchingResult = winLotto.countMatchingNumbers(lotto);
      matchedNumberList.push(matchingResult);
    });
  }
}

export default LottoBundle;
