import LOTTO_CONSTANT_NUMBER from '../constants/lotto.js';
import Lotto from '../Lotto.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class Counter {
  #lottoTicketNumber;

  constructor(inputAmount) {
    this.#calculateLottoTicketNumber(inputAmount);
  }

  #calculateLottoTicketNumber(inputAmount) {
    this.#lottoTicketNumber = inputAmount / LOTTO_CONSTANT_NUMBER.price;
  }

  #generateLotto() {
    const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
      LOTTO_CONSTANT_NUMBER.min,
      LOTTO_CONSTANT_NUMBER.max,
      LOTTO_CONSTANT_NUMBER.winningNumbersLength
    );
    lottoNumbers.sort((a, b) => a - b);

    return lottoNumbers;
  }

  giveLotto() {
    const lottoBox = [];
    Array.from({ length: this.#lottoTicketNumber }, () => {
      const lotto = this.#generateLotto();
      lottoBox.push(new Lotto(lotto).numbers);
    });

    return lottoBox;
  }
}

export default Counter;
