import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import LOTTO_RULE from "./constant/LottoRule.js";

class Lottos {
  #tickets;

  constructor(ticketCount) {
    this.#tickets = this.#createLottoTickets(ticketCount);
  }

  #createLottoTickets(ticketCount) {
    return Array.from({ length: ticketCount }, () => this.#createLottoTicket());
  }

  #createLottoTicket() {
    const newNumbers = Random.pickUniqueNumbersInRange(
      LOTTO_RULE.WINNING_NUMBERS_MIN_NUMBER,
      LOTTO_RULE.WINNING_NUMBERS_MAX_NUMBER,
      LOTTO_RULE.WINNING_NUMBERS_LENGTH
    );
    return new Lotto(newNumbers);
  }

  calculateResults(winningNumbers, bonusNumber) {
    return this.#tickets.map((lotto) =>
      lotto.calculateResult(winningNumbers, bonusNumber)
    );
  }
}

export default Lottos;
