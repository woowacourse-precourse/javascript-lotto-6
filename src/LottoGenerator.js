import { Random } from "@woowacourse/mission-utils";
import {
  LOTTO_NUMBERS_COUNT,
  LOTTO_NUMBER_END,
  LOTTO_NUMBER_START,
  LOTTO_PRICE,
} from "./utils/lottoConstants.js";

class LottoGenerator {
  calculateNumberOfLottoTickets(money) {
    return money / LOTTO_PRICE;
  }

  generateSingleLottoTicket() {
    return Random.pickUniqueNumbersInRange(
      LOTTO_NUMBER_START,
      LOTTO_NUMBER_END,
      LOTTO_NUMBERS_COUNT
    );
  }

  getLottoTickets(money) {
    const numberOfLotto = this.calculateNumberOfLottoTickets(money);
    const lottoTickets = Array(numberOfLotto)
      .fill()
      .map(() => this.generateSingleLottoTicket());
    return lottoTickets;
  }
}

export default LottoGenerator;
