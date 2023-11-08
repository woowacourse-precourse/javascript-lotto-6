import { MissionUtils } from "@woowacourse/mission-utils";
import { purchaseSize } from "./utils/purchaseSize.js";
import { RANGE } from "./constant/NUMBER.js";
import PurchasePrice from "./PurchasePrice.js";

class Game {
  constructor() {
    this.allLottoNumbers = [];
    this.matchingResults = [0, 0, 0, 0, 0];
  }

  #generateRandomLotto() {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      RANGE.MIN,
      RANGE.MAX,
      RANGE.SIZE
    ).sort((a, b) => a - b);
  }

  drawLotto(size) {
    this.allLottoNumbers = Array.from({ length: purchaseSize(size) }).map(
      () => {
        return this.#generateRandomLotto();
      }
    );

    return this.allLottoNumbers;
  }

  #calculateOneLottoMatch(lotto, drawingLotto) {
    return lotto.filter((item) => drawingLotto.includes(item)).length;
  }

  #countWinning(counts, prizeResult) {
    if (counts >= 3 && counts <= 6) {
      return prizeResult[counts - 3]++;
    }
  }

  #isMatchBonusBall(bonusNumber, drawingLotto) {
    return drawingLotto.includes(bonusNumber);
  }

}

export default Game;
