import { MissionUtils } from "@woowacourse/mission-utils";
import { purchaseSize } from "./utils/purchaseSize.js";
import { earningRate } from "./utils/earningRate.js";
import { ranking } from "./utils/rank.js";
import { RANGE, INITIAL, BONUS, MIN_MATCHING } from "./constant/NUMBER.js";
import PurchasePrice from "./PurchasePrice.js";

class Game {
  constructor() {
    this.lottoNumbers = [];
    this.ranking = Array.from({ length: ranking() }, () => INITIAL);
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
    if (counts >= MIN_MATCHING) {
      return prizeResult[counts - MIN_MATCHING]++;
    }
  }

  #isMatchedBonus(bonusNumber, drawingLotto) {
    return drawingLotto.includes(bonusNumber);
  }

  getLottoResults(lotto, drawingLottoArray, bonus) {
    drawingLottoArray.forEach((drawingLotto) => {
      const matchCounts = this.#countMatch(lotto, drawingLotto);
      this.#countWinnings(matchCounts, this.ranking);

      if (
        matchCounts === BONUS.CONDITION &&
        this.#isMatchedBonus(bonus, drawingLotto)
      ) {
        this.ranking[ranking() - 1]++;
      }
    });

    return this.ranking;
  }

  getEarningRate(prize, ranking, purchasePrice) {
    const totalEarnings = prize.reduce((sum, element, index) => {
      return sum + element * ranking[index];
    }, INITIAL);

    return earningRate(totalEarnings, purchasePrice);
  }
}

export default Game;
