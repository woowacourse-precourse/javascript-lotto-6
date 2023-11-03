import { Random } from '@woowacourse/mission-utils';
import CONFIG from '../constants/config.js';

class LottoTicket {
  #lottoNumber;

  constructor() {
    this.#lottoNumber = Random.pickUniqueNumbersInRange(
      CONFIG.MIN_LOTTO_NUMBER,
      CONFIG.MAX_LOTTO_NUMBER,
      CONFIG.LOTTO_LENGTH
    ).sort((a, b) => a - b);
  }

  getLottoNumber() {
    return this.#lottoNumber;
  }
}

export default LottoTicket;
