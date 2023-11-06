import Lotto from './Lotto.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import LOTTO_CONSTANT from '../constants/lotto.js';

class Counter {
  #lottoTicketNumber;

  constructor(inputAmount) {
    this.#calculateLottoTicketNumber(inputAmount);
  }

  #calculateLottoTicketNumber(inputAmount) {
    this.#lottoTicketNumber = inputAmount / 1000;
  }

  #generateLotto() {
    const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(LOTTO_CONSTANT.min, LOTTO_CONSTANT.max, LOTTO_CONSTANT.count);
    lottoNumbers.sort((a, b) => a - b);

    return lottoNumbers;
  }

  get giveLotto() {
    const lottoBox = [];
    while (this.#lottoTicketNumber) {
      const lotto = this.#generateLotto();
      lottoBox.push(new Lotto(lotto));
      this.#lottoTicketNumber--;
    }

    return lottoBox;
  }
}

export default Counter;
