import { PROFIT } from '../constants/index.js';

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
      if (matchedNumbers.length === 3) Matched += 1;
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
      if (matchedNumbers.length === 4) Matched += 1;
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
      if (matchedNumbers.length === 5) Matched += 1;
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
        matchedNumbers.length === 5 &&
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
      if (matchedNumbers.length === 6) Matched += 1;
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
    return ((totalProfit / (coin * 1000)) * 100).toFixed(1);
  }
}
