import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

const DEFAULT_LOTTO_PRICE = 1000;

const range = (length) => Array.from({ length }, (_, i) => i);
const issueLotto = () => {
  const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
  return new Lotto(lottoNumbers);
};

class LottoMachine {
  #price;

  constructor(price = DEFAULT_LOTTO_PRICE) {
    this.#price = price;
  }

  sell(amount) {
    const count = Math.floor(amount / this.#price);
    return range(count).map(issueLotto);
  }
}

export default LottoMachine;
