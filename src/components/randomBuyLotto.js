import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME, ERROR } from "../pages/text.js";
import InputValidator from "../utils/inputValids.js";

export default class randomBuyLotto {
  constructor(count) {
    this.count = count;
    this.lottoTickets = [];
  }

  generateRandomLotto() {
    const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
      1,
      45,
      6
    );
    return randomNumbers.sort((a, b) => a - b);
  }

  buyLottoTickets() {
    this.lottoTickets = Array.from({ length: this.count }, () =>
      this.generateRandomLotto()
    );
  }

  getLottoTickets() {
    return this.lottoTickets;
  }

  printLottoTickets() {
    MissionUtils.Console.print(GAME.buy(this.count));
    this.lottoTickets.map((ticket) =>
      MissionUtils.Console.print(`[${ticket.join(", ")}]`)
    );
  }
}
