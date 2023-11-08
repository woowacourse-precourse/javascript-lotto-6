import { Random } from "@woowacourse/mission-utils";
import Statics from "../static/Statics.js";
import Lotto from "../Lotto.js";

class Model {
  #lottos;
  #purchaseBudget;

  constructor(purchaseBudget) {
    this.#purchaseBudget = purchaseBudget;
    this.#lottos = this.purchaseLottos(purchaseBudget)
  }
  
  purchaseLottos(purchaseBudget) {
    const MAXpurchasableAmount = Math.floor(purchaseBudget / Statics.lotto.price);
    return Array(MAXpurchasableAmount).fill(null).map(() => {
      return new Lotto(Random.pickUniqueNumbersInRange(
        Statics.lotto.condition.low, Statics.lotto.condition.high, Statics.lotto.condition.digit
      ).sort((a, b) => a - b))
    })
  }

  checkIsWinTheLottery(winningNumber, bonusNumber) {
    const lotteryResult = {
        place1: 0,
        place2: 0,
        place3: 0,
        place4: 0,
        place5: 0,
    };

    this.#lottos.map((lotto) => {
        const lottoNumbers = lotto.getNumberArray();
        const place = CompareTwoNumber.getPlace(lottoNumbers, winningNumber, bonusNumber);
        if (place !== null) {
            lotteryResult[`${place}PlaceCount`] += 1;
        }
    });
    return lotteryResult;
  }

  getNumbersInLottos() { return this.#lottos.map(lotto => lotto.getNumbers()); }

  getPurchaseBudget() {
    return this.#purchaseBudget
  }  
}

export default Model;