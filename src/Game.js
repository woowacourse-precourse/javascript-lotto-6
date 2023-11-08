import { MissionUtils } from "@woowacourse/mission-utils";
import { purchaseSize } from "./utils/purchaseSize.js";
import { earningRate } from "./utils/earningRate.js";
import { RANGE, INITIAL } from "./constant/NUMBER.js";
import PurchasePrice from "./PurchasePrice.js";

class Game {
  constructor() {
    this.lottoNumbers = [];
    this.matchResults = Array.from({ length: 5 }, () => INITIAL);
  }

  #generateLotto() {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      RANGE.MIN,
      RANGE.MAX,
      RANGE.SIZE
    ).sort((a, b) => a - b);
  }

  drawLotto(price) {
    const size = purchaseSize(price);
    this.lottoNumbers = Array.from({ length: size }).map(() => {
      return this.#generateLotto();
    });

    return this.lottoNumbers;
  }

  #countMatch(lotto, drawingLotto) {
    return lotto.filter((item) => drawingLotto.includes(item)).length;
  }

  #countWinnings(counts, prizeResult) {
    if (counts >= 3 && counts <= 6) {
      return prizeResult[counts - 3]++;
    }
  }

  #isMatchedBonus(bonusNumber, drawingLotto) {
    return drawingLotto.includes(bonusNumber);
  }

  getLottoResults(lotto, drawingLottoArray, bonus) {
    drawingLottoArray.forEach((drawingLotto) => {
      const matchCounts = this.#countMatch(lotto, drawingLotto);
      this.#countWinnings(matchCounts, this.matchResults);

      if (matchCounts === 5 && this.#isMatchedBonus(bonus, drawingLotto)) {
        this.matchResults[4]++;
      }
    });

    return this.matchResults;
  }

  getEarningRate(prize, matchResults, purchasePrice) {
    const totalEarnings = prize.reduce((sum, element, index) => {
      return sum + element * matchResults[index];
    }, INITIAL);

    return earningRate(totalEarnings, purchasePrice);
  }
}

export default Game;
