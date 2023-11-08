import { PRIZES } from '../constants/ErrorMessage.js';

class Result {
  #winningNumbers;

  #bonusNumber;

  #lottos;

  #result;

  constructor(winningNumbers, bonusNumber, lottos) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
    this.#lottos = lottos;
    this.#result = this.#initResult();
  }

  #initResult() {
    const result = Object.keys(PRIZES).reduce((acc, key) => {
      acc[key] = { count: 0, prize: PRIZES[key] };
      return acc;
    }, {});

    return result;
  }

  getResults() {
    this.#lottos.forEach(lotto => {
      const matchCount = lotto.filter(number =>
        this.#winningNumbers.includes(number),
      ).length;
      const isBonusNumberMatch =
        lotto.includes(this.#bonusNumber) && matchCount === 5;
      const key = isBonusNumberMatch ? '5+1' : matchCount;
      if (this.#result[key]) {
        this.#result[key].count += 1;
      }
    });
    return this.#result;
  }
}

export default Result;