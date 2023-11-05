import { Random } from "@woowacourse/mission-utils";
import {
  LOTTO_NUMBERS_COUNT,
  LOTTO_NUMBER_END,
  LOTTO_NUMBER_START,
  LOTTO_PRICE,
} from "./utils/lottoConstants.js";

class LottoGenerator {
  calculateNumberOfLotto(money) {
    return money / LOTTO_PRICE;
  }

  generateSingleLottoTicket() {
    return Random.pickUniqueNumbersInRange(
      LOTTO_NUMBER_START,
      LOTTO_NUMBER_END,
      LOTTO_NUMBERS_COUNT
    );
  }

  async getLottoTickets(money) {
    const numberOfLotto = this.calculateNumberOfLotto(money);
    const lottoTickets = [];

    for (let i = 0; i < numberOfLotto; i += 1) {
      const lottoTicket = this.generateSingleLottoTicket();
      lottoTickets.push(lottoTicket);
    }

    return lottoTickets;
  }
}

export default LottoGenerator;
