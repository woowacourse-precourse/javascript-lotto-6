import { Random } from "@woowacourse/mission-utils";
import { MIN_NUMBER, MAX_NUMBER, LOTTO_LENGTH } from "./utils/constants.js";

class LottoMachine {
  #lottoGenerator() {
    const RANDOM_NUMBER = Random.pickUniqueNumbersInRange(
      MIN_NUMBER,
      MAX_NUMBER,
      LOTTO_LENGTH
    );
    return RANDOM_NUMBER.sort((a, b) => a - b);
  }

  returnLotto(input) {
    const LOTTO_LIST = [];
    let count = 0;

    while (count < input) {
      const LOTTO = this.#lottoGenerator();
      LOTTO_LIST.push(LOTTO);
      count++;
    }

    return LOTTO_LIST;
  }
}

export default LottoMachine;
