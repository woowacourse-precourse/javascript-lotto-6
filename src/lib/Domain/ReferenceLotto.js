import Lotto from "../../Lotto.js";
import { ERROR_MESSAGE, GAME_RULE, PRIZE_TO_REWARD } from "../Constants.js";

class ReferenceLotto extends Lotto {
  #bonus;

  calcResult(lottoBundleItems) {
    if (!this.#bonus) throw new Error(ERROR_MESSAGE.INSTANCE_NOT_INITIALIZED);
    const prizeMap = this.#calcPrizeMap(lottoBundleItems);
    const winRate = this.#calcWinRate(prizeMap);
    return { prizeMap, winRate };
  }

  #calcPrizeMap(lottoBundleItems) {
    const prizeMap = new Map();
    lottoBundleItems.forEach((lotto) => {
      const prize = lotto.calcPrize(this);
      const value = prizeMap.get(prize) ?? 0;
      prizeMap.set(prize, value + 1);
    });
    return prizeMap;
  }

  #calcWinRate(prizeMap) {
    const earnings = Array.from(prizeMap.entries())
      .map(([prize, count]) => PRIZE_TO_REWARD[prize] * count)
      .reduce((a, b) => a + b);
    const lottoSize = Array.from(prizeMap.entries())
      .map(([_, count]) => count)
      .reduce((a, b) => a + b);
    const invested = lottoSize * GAME_RULE.LOTTO_PRICE;
    return (earnings / invested) * 100;
  }

  set bonus(bonus) {
    if (this.#bonus) throw new Error(ERROR_MESSAGE.FIELD_ALREADY_INITIALIZED);
    this.validateBonusNumber(bonus);
    this.#bonus = bonus;
  }

  get bonus() {
    return this.#bonus;
  }
}

export default ReferenceLotto;
