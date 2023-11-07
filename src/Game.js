import { MissionUtils } from "@woowacourse/mission-utils";
import { RANGE } from "./constant/NUMBER.js";
import PurchasePrice from "./PurchasePrice.js";

class Game {
  allLottoNumbers = [];
  matchingResults = [0, 0, 0, 0, 0];

  drawLotto(size) {
    Array.from({ length: purchaseSize(size) }).forEach(() => {
      const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
        RANGE.MIN,
        RANGE.MAX,
        RANGE.SIZE
      );

      this.allLottoNumbers.push(randomNumbers.sort((a, b) => a - b));
    });

    return this.allLottoNumbers;
  }

}

export default Game;
