import LOTTO from './constants/lotto.js';

class ResultCalculator {
  #ranking;

  constructor() {
    this.#ranking = {
      first: 0, // match 6 numbers
      second: 0, // match 5 numbers + bonus number
      third: 0, // match 5 numbers
      fourth: 0, // match 4 numbers
      fifth: 0, // match 3 numbers
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
      this.#ranking.first += 1;
    } else if (cnt === 5 && this.#isBonusMatch(lotto, winningLotto)) {
      this.#ranking.second += 1;
    } else if (cnt === 5) {
      this.#ranking.third += 1;
    } else if (cnt === 4) {
      this.#ranking.fourth += 1;
    } else if (cnt === 3) {
      this.#ranking.fifth += 1;
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
