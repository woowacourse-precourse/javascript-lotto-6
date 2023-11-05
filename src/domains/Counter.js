import Lotto from '../Lotto.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import validateInputAmount from '../validations/validateInputAmount.js';

const LOTTO_CONSTANT = Object.freeze({
  min: 1,
  max: 45,
  count: 6,
});

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
