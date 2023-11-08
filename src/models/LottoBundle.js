import { Random } from '@woowacourse/mission-utils';
import { OPTIONS } from '../constants/lottoConstants.js';
import Lotto from './Lotto.js';

class LottoBundle {
  #lottoBundle;

  constructor(amount) {
    this.#lottoBundle = this.#createLottoBundle(amount);
  }

  getLottoBundle() {
    return this.#lottoBundle;
  }

  #createLottoBundle(amount) {
    const lottoBundle = [];

    let currentAmount = 0;
    while (currentAmount < amount) {
      const lotto = this.#generateLotto();
      lottoBundle.push(lotto);
      currentAmount += 1;
    }

    return lottoBundle;
  }

  #generateLotto() {
    const numbers = Random.pickUniqueNumbersInRange(
      OPTIONS.minNumber,
      OPTIONS.maxNumber,
      OPTIONS.length
    );

    return new Lotto(numbers);
  }

  populateWinResult(winLotto) {
    const matchedNumberList = [];
    this.#lottoBundle.forEach((lotto) => {
      const matchingResult = winLotto.countMatchingNumbers(lotto);
      matchedNumberList.push(matchingResult);
    });

    return matchedNumberList;
  }
}

export default LottoBundle;
