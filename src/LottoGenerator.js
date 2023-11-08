import { Random } from '@woowacourse/mission-utils';
import { LOTTO_GAME } from './utils/constants.js';
import Lotto from './Lotto.js';

class LottoGenerator {
  #numOfLottos;
  #lottoTickets;

  constructor(numOfLottos) {
    this.#numOfLottos = numOfLottos;
    this.#lottoTickets = [];

    this.#saveLottoTickets();
  }

  #saveLottoTickets() {
    this.#lottoTickets = this.#generateLottoTickets();
  }

  #generateLottoTickets() {
    return Array.from({ length: this.#numOfLottos }, () =>
      this.#generateLottoTicket()
    );
  }

  #generateLottoTicket() {
    const numbers = this.#generateUniqueRandomNumbers();
    return new Lotto(numbers);
  }

  #generateUniqueRandomNumbers() {
    return Random.pickUniqueNumbersInRange(
      LOTTO_GAME.MIN_NUMBER,
      LOTTO_GAME.MAX_NUMBER,
      LOTTO_GAME.TOTAL_NUMBERS
    );
  }
}

export default LottoGenerator;
