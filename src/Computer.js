import Lotto from "./Lotto.js";
import { Random } from "@woowacourse/mission-utils";

export class Computer {
  constructor() {}

  generate(amount) {
    const lottoTickets = [];
    for (let i = 0; i < amount; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoTickets.push(new Lotto(numbers).sort());
    }

    return lottoTickets;
  }
}

export default Computer;
