import Lotto from "./Lotto.js";
import RandomGenerator from "../utils/Random.js";
import WinningChecker from "./WinningChecker.js";
import LOTTO from "../constants/LOTTO.js";
import NUMBER from "../constants/NUMBER.js";

class LottoGame {
  #lottoCount;
  #lottos;
  #results;

  constructor(purchaseAmount) {
    this.#lottoCount = this.#calculateCount(purchaseAmount);
    this.#results = LOTTO.RESULTS;
  }

  get countOfLotto() {
    return this.#lottoCount;
  }

  get lottos() {
    return this.#lottos;
  }

  get results() {
    return this.#results;
  }

  #calculateCount(purchaseAmount) {
    return purchaseAmount / NUMBER.PURCHASE.UNIT;
  }

  #createLotto() {
    const numbers = RandomGenerator.lottoWinningNumbers();
    const lotto = new Lotto(numbers);
    return lotto;
  }

  createLottos() {
    const lottos = [];
    for (let i = 0; i < this.#lottoCount; i++) {
      lottos.push(this.#createLotto());
    }
    this.#lottos = lottos;
    return this;
  }

  #calculateResult(winningNumbers, bonusNumber) {
    const winningChecker = new WinningChecker(winningNumbers, bonusNumber);
    const results = {
      FIFTH: 0,
      FOURTH: 0,
      THIRD: 0,
      SECOND: 0,
      FIRST: 0,
    };

    this.#lottos.forEach((lotto) => {
      if (winningChecker.getWinningResult(lotto.numbers) === "NONE") return;
      results[winningChecker.getWinningResult(lotto.numbers)]++;
    });
    this.#results = this.#convertObjectToArray(results);
  }

  #convertObjectToArray(results) {
    return Object.keys(results).map((key) => ({
      rank: key,
      count: results[key],
    }));
  }

  calculateResult(winningNumbers, bonusNumber) {
    this.#calculateResult(winningNumbers, bonusNumber);
    return this;
  }
}

export default LottoGame;
