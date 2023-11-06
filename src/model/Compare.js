import { PROFIT } from '../constants/index.js';

export default class Compare {
  #winningNumber;
  #bonusNumber;

  constructor(winningNumber, bonusNumber) {
    this.#winningNumber = winningNumber.getNumbers();
    this.#bonusNumber = bonusNumber;
  }

  getMatchedThreeNumber(boughtLottos) {
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

  getMatchedFourNumber(boughtLottos) {
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

  getMatchedFiveNumber(boughtLottos) {
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

  getMatchedBonusNumber(boughtLottos) {
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

  getMatchedSixNumber(boughtLottos) {
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

  getMatchedAllNumber(boughtLottos) {
    const results = [];

    results.push(this.getMatchedThreeNumber(boughtLottos));
    results.push(this.getMatchedFourNumber(boughtLottos));
    results.push(this.getMatchedFiveNumber(boughtLottos));
    results.push(this.getMatchedBonusNumber(boughtLottos));
    results.push(this.getMatchedSixNumber(boughtLottos));
    return results;
  }

  getProfit(boughtLottos, coin) {
    let totalProfit = 0;
    const result = this.getMatchedAllNumber(boughtLottos);
    result.forEach((count, index) => {
      totalProfit += count * PROFIT[index];
    });
    return ((totalProfit / (coin * 1000)) * 100).toFixed(1);
  }
}
