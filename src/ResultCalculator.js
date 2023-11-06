import LOTTO from './constants/lotto.js';

class ResultCalculator {
  #ranking;

  constructor() {
    this.#ranking = {
      six: 0, // match 6 numbers
      fiveWithBonus: 0, // match 5 numbers + bonus number
      five: 0, // match 5 numbers
      four: 0, // match 4 numbers
      three: 0, // match 3 numbers
    };
  }

  get ranking() {
    return this.#ranking;
  }

  compareLottos(lottos, winningLotto) {
    lottos.forEach((lotto) => {
      const cntMatching = this.#countMatchingNumbers(lotto, winningLotto);
      this.#rankLotto(cntMatching, lotto, winningLotto);
    });
  }

  #rankLotto(cnt, lotto, winningLotto) {
    if (cnt === 6) {
      this.#ranking.six += 1;
    } else if (cnt === 5 && this.#isBonusMatch(lotto, winningLotto)) {
      this.#ranking.fiveWithBonus += 1;
    } else if (cnt === 5) {
      this.#ranking.five += 1;
    } else if (cnt === 4) {
      this.#ranking.four += 1;
    } else if (cnt === 3) {
      this.#ranking.three += 1;
    }
  }

  #isBonusMatch(lotto, winningLotto) {
    return lotto.numbers.includes(winningLotto.bonusNumber);
  }

  #countMatchingNumbers(lotto, winningLotto) {
    const SetLottos = new Set([...lotto.numbers, ...winningLotto.numbers]);
    const numberOfMatchingNumbers = LOTTO.size * 2 - SetLottos.size;
    return numberOfMatchingNumbers;
  }
}

export default ResultCalculator;
