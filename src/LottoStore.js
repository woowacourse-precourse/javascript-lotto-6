import { Random, Console } from "@woowacourse/mission-utils";
import { LOTTO } from "./constants/Standard.js";
import MESSAGES from "./constants/Messages.js";
import Lotto from "./Lotto.js";

class LottoStore {
  publishLotto(number) {
    Console.print(MESSAGES.SHOW_PURCHASE_HISTORY(number));

    const lottos = [];

    for (let i = 0; i < number; i++) {
      const lottoNumbers = this.#getRandomNumbers();
      Console.print(`[${lottoNumbers.join(", ")}]`);
      lottos.push(new Lotto(lottoNumbers));
    }

    return lottos;
  }

  #getRandomNumbers() {
    const numbers = Random.pickUniqueNumbersInRange(
      LOTTO.MIN_NUMBER,
      LOTTO.MAX_NUMBER,
      LOTTO.LENGTH
    );
    return numbers.sort((a, b) => a - b);
  }
}

export default LottoStore;
