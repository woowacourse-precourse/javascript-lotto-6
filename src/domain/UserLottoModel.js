import { ERROR_MESSAGES } from "../utils/Messages.js";
import { isDivisibleByThousand } from "../utils/Validation.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class UserLottoModel {
  #lottoTickets;

  constructor() {
    this.#lottoTickets = [];
  }

  generateLottoTicket(inputNum) {
    const tickets = this.#calculateNumberOfTickets(inputNum);
    for (let i = 0; i < tickets; i++) {
      const ticket = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      this.#lottoTickets.push(new Lotto(ticket));
    }
  }

  #calculateNumberOfTickets(inputNum) {
    return inputNum / 1000;
  }

  getLottoTickets() {
    return this.#lottoTickets;
  }
}

export default UserLottoModel;
