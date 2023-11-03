import { ERROR_MESSAGES } from "../utils/Messages.js";
import { isDivisibleByThousand } from "../utils/Validation.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class LottoModel {
  #lottoTickets;

  constructor(number) {
    this.#lottoTickets = [];
    this.#validateNumber(number);
  }

  #validateNumber(number) {
    if (!isDivisibleByThousand(number)) {
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_PRICE);
    }
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

export default LottoModel;
