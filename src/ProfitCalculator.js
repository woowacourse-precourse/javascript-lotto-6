import { PROFIT } from "./constants/Standard.js";
import { matchNumberToStringMatcher } from "./utils/Matcher.js";

class ProfitCalculator {
  #lottos;
  #matchCount;
  #winningNumber;
  #bonusNumber;

  constructor({ lottos, winningNumber, bonusNumber }) {
    this.#lottos = lottos;
    this.#winningNumber = winningNumber;
    this.#bonusNumber = bonusNumber;
    this.#matchCount = {
      underTwo: 0,
      three: 0,
      four: 0,
      five: 0,
      fiveWithBonus: 0,
      six: 0,
    };
  }

  getResultAndProfit() {
    // [result, profit] 형식으로 출력!
  }

  #confirmLottos() {
    this.#lottos.forEach((lotto) => {
      const match = lotto.checkSameNumber(
        this.#winningNumber,
        this.#bonusNumber
      );
      this.#matchCount[matchNumberToStringMatcher(match)]++;
    });
  }
}

export default ProfitCalculator;
