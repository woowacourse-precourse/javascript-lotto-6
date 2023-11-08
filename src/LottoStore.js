import { Random, Console } from "@woowacourse/mission-utils";

import Lotto from "./Lotto.js";

class LottoStore {
  sellLotto(money) {
    const lottoTickets = money / 1000;

    const lottos = [];
    for (let i = 0; i < lottoTickets; i++) {
      const randomNumbers = this.makeRandomNumbers();
      const lotto = new Lotto(randomNumbers);

      lottos.push(lotto);
    }

    return lottos;
  }
}

export default LottoStore;
