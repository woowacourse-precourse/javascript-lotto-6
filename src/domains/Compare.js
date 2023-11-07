import {
  PROFIT,
  THREE,
  FOUR,
  FIVE,
  SIX,
  KRW_UNIT,
} from '../constants/constants.js';

export default class Compare {
  #winningNumber;
  #bonusNumber;

  constructor(winningNumber, bonusNumber) {
    this.#winningNumber = winningNumber.getNumbers();
    this.#bonusNumber = bonusNumber;
  }

  getMatchedThree(boughtLottos) {
    let Matched = 0;

    boughtLottos.forEach((Lotto) => {
      const lottoNumbers = Lotto.getNumbers();
      const matchedNumbers = lottoNumbers.filter((number) =>
        this.#winningNumber.includes(number)
      );
      if (matchedNumbers.length === THREE) Matched += 1;
    });

    return Matched;
  }

  getMatchedFour(boughtLottos) {
    let Matched = 0;

    boughtLottos.forEach((Lotto) => {
      const lottoNumbers = Lotto.getNumbers();
      const matchedNumbers = lottoNumbers.filter((number) =>
        this.#winningNumber.includes(number)
      );
      if (matchedNumbers.length === FOUR) Matched += 1;
    });

    return Matched;
  }

  getMatchedFive(boughtLottos) {
    let Matched = 0;

    boughtLottos.forEach((Lotto) => {
      const lottoNumbers = Lotto.getNumbers();
      const matchedNumbers = lottoNumbers.filter((number) =>
        this.#winningNumber.includes(number)
      );
      if (matchedNumbers.length === FIVE) Matched += 1;
    });

    return Matched;
  }

  getMatchedBonus(boughtLottos) {
    let Matched = 0;

    boughtLottos.forEach((Lotto) => {
      const lottoNumbers = Lotto.getNumbers();
      const matchedNumbers = lottoNumbers.filter((number) =>
        this.#winningNumber.includes(number)
      );
      if (
        matchedNumbers.length === FIVE &&
        lottoNumbers.includes(this.#bonusNumber)
      ) {
        Matched += 1;
      }
    });

    return Matched;
  }

  getMatchedSix(boughtLottos) {
    let Matched = 0;

    boughtLottos.forEach((Lotto) => {
      const lottoNumbers = Lotto.getNumbers();
      const matchedNumbers = lottoNumbers.filter((number) =>
        this.#winningNumber.includes(number)
      );
      if (matchedNumbers.length === SIX) Matched += 1;
    });

    return Matched;
  }

  getMatchedAll(boughtLottos) {
    const results = [];

    results.push(this.getMatchedThree(boughtLottos));
    results.push(this.getMatchedFour(boughtLottos));
    results.push(this.getMatchedFive(boughtLottos));
    results.push(this.getMatchedBonus(boughtLottos));
    results.push(this.getMatchedSix(boughtLottos));
    return results;
  }

  getProfit(boughtLottos, coin) {
    let totalProfit = 0;
    const result = this.getMatchedAll(boughtLottos);
    result.forEach((count, index) => {
      totalProfit += count * PROFIT[index];
    });
    return ((totalProfit / (coin * KRW_UNIT)) * 100).toFixed(1);
  }
}
