import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
class LottoGame {
  #lottos;
  #purchaseNumber;
  constructor(purchaseAmount) {
    this.#validate(purchaseAmount);
    this.#lottos = [];
    this.#purchaseNumber = purchaseAmount / 1000;
    this.#issueLotto();
  }

  #validate(purchaseAmount) {
    if (purchaseAmount % 1000 !== 0) {
      throw new Error("[ERROR]");
    }
  }

  #issueLotto() {
    for (let i = 0; i < this.#purchaseNumber; i++) {
      const LOTTO = new Lotto(this.generateRandomNumbers());
      this.#lottos.push(LOTTO);
    }
  }

  getLottoNumbers() {
    const LOTTO_NUMBERS = [];
    for (let i = 0; i < this.#lottos.length; i++) {
      LOTTO_NUMBERS.push(this.#lottos[i].getNumbers());
    }
    return LOTTO_NUMBERS;
  }

  generateRandomNumbers() {
    const RANDOM_NUMBERS = [];
    while (RANDOM_NUMBERS.length < 6) {
      const NEW_ELEMENT = MissionUtils.Random.pickNumberInRange(1, 45);
      if (!RANDOM_NUMBERS.includes(NEW_ELEMENT)) {
        RANDOM_NUMBERS.push(NEW_ELEMENT);
      }
    }
    return RANDOM_NUMBERS;
  }

  getWinningStatus(winningNumbers) {
    const MATHING_COUNTS = [];
    for (let i = 0; i < this.#lottos.length; i++) {
      MATHING_COUNTS.push(this.#lottos[i].getMatchingCount(winningNumbers));
    }
    const WINNING_STATUS = this.countArrElements(MATHING_COUNTS);
    return WINNING_STATUS;
  }

  countArrElements(arr) {
    const ELEMENT_COUNTS = {};
    for (const ELEMENT of arr) {
      if (!ELEMENT_COUNTS[ELEMENT]) {
        ELEMENT_COUNTS[ELEMENT] = 0;
      }
      ELEMENT_COUNTS[ELEMENT] += 1;
    }
    return ELEMENT_COUNTS;
  }
}
export default LottoGame;
