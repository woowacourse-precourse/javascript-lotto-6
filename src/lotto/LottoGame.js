import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import GameUtils from "./GameUtils.js";
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
 

  getWinningStatus(winningNumbers, bonusNumber) {
    const MATHING_COUNTS = [];
    for (let index = 0; index < this.#lottos.length; index++) {
      MATHING_COUNTS.push(this.#lottos[index].getMatchingCount(winningNumbers));
    }
    const MATHING_COUNT_OBJ = this.matchingCountsWithObj(MATHING_COUNTS,bonusNumber);
    const WINNING_STATUS = GameUtils.removeItemsWithNumericKeysLessThanThree(MATHING_COUNT_OBJ);
    return WINNING_STATUS;
  }

  checkBonusNumberMatch(index, bonusNumber) {
    const LOTTO_NUMBERS = this.#lottos[index].getNumbers();
    if (LOTTO_NUMBERS.includes(Number(bonusNumber))) {
        return 'bonus';
    }
    return '5';
  }
  matchingCountsWithObj(matchingCounts,bonusNumber) {
    const WINNING_STATUS = {};
    for (let index=0; index<matchingCounts.length; index++) {
      let mathingCount = matchingCounts[index];
      if (mathingCount===5) {
        mathingCount = this.checkBonusNumberMatch(index,bonusNumber)
      }
      if (!WINNING_STATUS[mathingCount]) {
        WINNING_STATUS[mathingCount] = 1;
        continue;
      }
      WINNING_STATUS[mathingCount] += 1;
    }
    return WINNING_STATUS;
  }
}
export default LottoGame;
