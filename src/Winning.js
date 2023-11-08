import {
  ZERO,
  ONE,
  RANK,
  PRIZE,
  CORRECT_COUNT,
  FIVE_ZEROS_ARRAY,
  PERCENTAGE_MULTIPLIER
} from "./Constants/Constant.js";

class Winning {
  #winningNumbers;
  #bonusNumber;
  #lottos;
  #rank = FIVE_ZEROS_ARRAY
  #rateOfReturn = ZERO;
  
  constructor(winningNumbers, bonusNumber, lottos) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
    this.#lottos = lottos.getLottos();
  }

  compareLottoNumbers() {
    this.#lottos.forEach((lotto) => {
      const winningType = lotto.filter(number => this.#winningNumbers.includes(number)).length;
      if (winningType === CORRECT_COUNT.three) this.#rank[RANK.fifth] += ONE;
      if (winningType === CORRECT_COUNT.four) this.#rank[RANK.fourth] += ONE;
      if (winningType === CORRECT_COUNT.five && !lotto.includes(this.#bonusNumber)) this.#rank[RANK.third] += ONE;
      if (winningType === CORRECT_COUNT.five && lotto.includes(this.#bonusNumber)) this.#rank[RANK.second] += ONE;
      if (winningType === CORRECT_COUNT.six) this.#rank[RANK.first] += ONE;
    })
  }

  calculateRateOfReturn(purchaseAmount) {
    const money = [PRIZE.first, PRIZE.second, PRIZE.third, PRIZE.fourth, PRIZE.fifth];
    let result = ZERO;
    this.#rank.forEach((count, index) => {
      result += money[index] * count;
    })
    this.#rateOfReturn = result / purchaseAmount * PERCENTAGE_MULTIPLIER;
    return this.#rateOfReturn;
  }

  getRank() {
    return this.#rank;
  }
  
}

export default Winning;
