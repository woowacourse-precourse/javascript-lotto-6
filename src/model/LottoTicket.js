import { LOTTO } from '../constants/constants.js';
import RandomGenerator from '../utils/RandomGenerator.js';

class LottoTicket {
  issueTickets(purchaseMoney) {
    const issueCount = purchaseMoney / LOTTO.price;
    return Array.from({ length: issueCount }, () => {
      return this.#createLotto();
    });
  }

  #createLotto() {
    return RandomGenerator.generate();
  }
}

export default LottoTicket;
