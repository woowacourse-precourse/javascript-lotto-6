import Lotto from "./Lotto.js";
import lottoRanking from "./lottoRanking.js";
import { Console } from "@woowacourse/mission-utils";
import { MESSAGES, CONSTANTS } from "../output/constants.js";

class Customer {
  #payment;
  #cntLottoTickets;

  constructor(payment) {
    this.#payment = payment;
    this.#cntLottoTickets = this.#payment / CONSTANTS.ONE_THOUSAND;
    this.lottoList = [];
  }

  buyLottoTickets() {
    for (let i = 0; i < this.#cntLottoTickets; i++) {
      this.lottoList.push(new Lotto());
    }

    this.printLottoTickets();
  }

  printLottoTickets() {
    Console.print(`${this.#cntLottoTickets}${MESSAGES.TICKETS_PURCHASED}`);

    this.lottoList.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(", ")}]`);
    });
  }
}

export default Customer;
