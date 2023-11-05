import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class Lottos {
  #tickets;

  constructor(ticketCount) {    
    this.#tickets = this.#createLottoTickets(ticketCount);
  }

  #createLottoTickets(ticketCount) {
    return Array.from({ length: ticketCount }, () => this.#createLottoTicket());
  }

  #createLottoTicket() {    
    const newNumbers = Random.pickUniqueNumbersInRange(1,45,6);
    return new Lotto(newNumbers);
  }
}

export default Lottos;
  