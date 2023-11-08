import { PROFIT, KRW_UNIT } from '../constants/constants.js';

export default class Compare {
  #winningNumber;
  #bonusNumber;

  #machedNumber;

  constructor(winningNumber, bonusNumber) {
    this.#winningNumber = winningNumber.getNumbers();
    this.#bonusNumber = bonusNumber;
    this.#machedNumber = { THREE: 0, FOUR: 0, FIVE: 0, BONUS: 0, SIX: 0 };
  }

  getMathced(boughtLottos) {
    boughtLottos.forEach((boughtLotto) => {
      const lotto = boughtLotto.getNumbers();
      const matchedNumbers = lotto.filter((number) =>
        this.#winningNumber.includes(number)
      );
      this.countMachedNumbers(matchedNumbers.length, lotto);
    });

    return this.#machedNumber;
  }

  countMachedNumbers(matchedNumbersLength, lotto) {
    if (matchedNumbersLength === 3) this.#machedNumber.THREE += 1;
    if (matchedNumbersLength === 4) this.#machedNumber.FOUR += 1;
    if (matchedNumbersLength === 5) {
      if (lotto.includes(this.#bonusNumber)) {
        this.#machedNumber.BONUS += 1;

        return;
      }
      this.#machedNumber.FIVE += 1;
    }
    if (matchedNumbersLength === 6) this.#machedNumber.SIX += 1;
  }

  getProfit(result, coin) {
    let totalProfit = 0;

    result.forEach((count, index) => {
      totalProfit += count * PROFIT[index];
    });

    return ((totalProfit / (coin * KRW_UNIT)) * 100).toFixed(1);
  }
}
