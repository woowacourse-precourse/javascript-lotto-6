import { ERROR_MESSAGES } from "../utils/Messages.js";
import { isDivisibleByThousand } from "../utils/Validation.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class UserLottoModel {
  #lottoTickets;

  constructor() {
    this.#lottoTickets = [];
  }
  
  generateLottoTicket(inputNum) {
    const tickets = this.#checkNumber(inputNum);
    for (let i = 0; i < tickets; i++) {
      const lottoTicket = MissionUtils.Random.pickUniqueNumbersInRange(1,45,6);
      lottoTicket.sort((a, b) => a - b);
      this.#lottoTickets.push(lottoTicket);
    }
  }

  #checkNumber(inputNum) {
    return inputNum / 1000;
  }

  getLottoTickets() {
    return this.#lottoTickets;
  }
}

export default UserLottoModel;
