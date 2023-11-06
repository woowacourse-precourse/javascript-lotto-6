import { GAME_RULE, PRIZE_TO_REWARD } from "../Constants.js";

// Lotto 클래스를 extend하면 안 됨 - 상속 문제로 Lotto 인스턴스의 프라이빗 필드가 비교 불가능해짐
class ReferenceLotto {
  #winningLotto;
  #bonus;

  constructor(lotto, bonus) {
    this.#validate(lotto, bonus);
    this.#winningLotto = lotto;
    this.#bonus = bonus;
  }

  #validate(lotto, bonus) {
    lotto.validateBonusNumber(bonus);
  }

  calcResult(lottoBundleItems) {
    const prizeMap = this.#calcPrizeMap(lottoBundleItems);
    const winRate = this.#calcWinRate(prizeMap);
    return { prizeMap, winRate };
  }

  #calcPrizeMap(lottoBundleItems) {
    const prizeMap = new Map();
    lottoBundleItems.forEach((lotto) => {
      const prize = lotto.calcPrize(this.#winningLotto, this.#bonus);
      const value = prizeMap.get(prize) ?? 0;
      prizeMap.set(prize, value + 1);
    });
    return prizeMap;
  }

  #calcWinRate(prizeMap) {
    const earnings = Array.from(prizeMap.entries())
      .map(([prize, count]) => PRIZE_TO_REWARD[prize] * count)
      .reduce((a, b) => a + b);
    const ticketSize = Array.from(prizeMap.entries())
      .map(([_, count]) => count)
      .reduce((a, b) => a + b);
    const ticketMoney = ticketSize * GAME_RULE.TICKET_PRICE;
    return (earnings / ticketMoney) * 100;
  }
}

export default ReferenceLotto;
