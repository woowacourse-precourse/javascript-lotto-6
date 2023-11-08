import { PROFIT, KRW_UNIT } from '../constants/constants.js';

export default class Compare {
  #winningNumber;
  #bonusNumber;

  #machedNumber;

  constructor(winningNumber, bonusNumber) {
    this.#winningNumber = winningNumber.getNumbers();
    this.#bonusNumber = bonusNumber;
    this.#machedNumber = { three: 0, four: 0, five: 0, bonus: 0, six: 0 };
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
    if (matchedNumbersLength === 3) this.#machedNumber.three += 1;
    if (matchedNumbersLength === 4) this.#machedNumber.four += 1;
    if (matchedNumbersLength === 5) {
      if (lotto.includes(this.#bonusNumber)) {
        this.#machedNumber.bonus += 1;
        return;
      }
      this.#machedNumber.five += 1;
    }
    if (matchedNumbersLength === 6) this.#machedNumber.six += 1;
  }

  getProfit(result, coin) {
    let totalProfit = 0;
    // const result = this.getMatchedAll(boughtLottos);
    result.forEach((count, index) => {
      totalProfit += count * PROFIT[index];
    });
    return ((totalProfit / (coin * KRW_UNIT)) * 100).toFixed(1);
  }
}

// getProfit(boughtLottos, coin) {
//   let totalProfit = 0;
//   const result = this.getMatchedAll(boughtLottos);
//   result.forEach((count, index) => {
//     totalProfit += count * PROFIT[index];
//   });
//   return ((totalProfit / (coin * KRW_UNIT)) * 100).toFixed(1);
// }
