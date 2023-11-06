import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import GameUtils from "./GameUtils.js";
import { WINNIG_PROFITS } from "../Constants.js";
class LottoGame {
  #lottos;
  #purchaseNumber;
  #purchaseAmount;
  constructor(purchaseAmount) {
    this.#validate(purchaseAmount);
    this.#lottos = [];
    this.#purchaseAmount = purchaseAmount;
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
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  getWinningStatus(winningNumbers, bonusNumber) {
    const MATHING_COUNTS = [];
    for (let index = 0; index < this.#lottos.length; index++) {
      MATHING_COUNTS.push(this.#lottos[index].getMatchingCount(winningNumbers));
    }
    const MATHING_COUNT_OBJ = this.matchingCountsWithObj(
      MATHING_COUNTS,
      bonusNumber
    );
    const WINNING_STATUS =
      GameUtils.processMatchingNumbersToResult(MATHING_COUNT_OBJ);
    return WINNING_STATUS;
  }

  checkBonusNumberMatch(index, bonusNumber) {
    const LOTTO_NUMBERS = this.#lottos[index].getNumbers();
    if (LOTTO_NUMBERS.includes(Number(bonusNumber))) {
      return "bonus";
    }
    return "5";
  }
  addOrUpdatePropertyInObj(obj, matchingCount) {
    let newObj = { ...obj };
    if (!obj[matchingCount]) {
      newObj[matchingCount] = 1;
      return newObj;
    }
    newObj[matchingCount] += 1;
    return newObj;
  }
  matchingCountsWithObj(matchingCounts, bonusNumber) {
    let matchingCountsObj = {};
    for (let index = 0; index < matchingCounts.length; index++) {
      let matchingCount = matchingCounts[index];
      if (matchingCount === 5) {
        matchingCount = this.checkBonusNumberMatch(index, bonusNumber);
      }
      matchingCountsObj = this.addOrUpdatePropertyInObj(matchingCountsObj, matchingCount);
    }
    return matchingCountsObj;
  }
  calculateRateOfReturn(winnigStatus) {
    let sumProfit = 0
    for (let winningNumber in winnigStatus) {
        sumProfit += WINNIG_PROFITS[winningNumber] * winnigStatus[winningNumber];
    }
    const RATE_OF_RETURN = ((sumProfit/this.#purchaseAmount)*100).toFixed(1);
    return RATE_OF_RETURN;
  }
}
export default LottoGame;
