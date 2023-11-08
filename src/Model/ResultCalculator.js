import LOTTO from '../constants/lotto.js';
import WINNING_INFO from '../constants/winningInfo.js';
import { roundToOneDecimalPlace } from '../utils/function.js';

class ResultCalculator {
  #cntRank;

  #earningRate;

  constructor() {
    this.#cntRank = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
  }

  get cntRank() {
    return this.#cntRank;
  }

  get earningRate() {
    return this.#earningRate;
  }

  compareLottos(lottos, winningLotto) {
    lottos.forEach((lotto) => {
      const cntMatching = this.#countMatchingNumbers(lotto, winningLotto);
      this.#rankLotto(cntMatching, lotto, winningLotto);
    });
  }

  #rankLotto(cnt, lotto, winningLotto) {
    if (cnt === 6) {
      this.#cntRank.first += 1;
    } else if (cnt === 5 && this.#isBonusMatch(lotto, winningLotto)) {
      this.#cntRank.second += 1;
    } else if (cnt === 5) {
      this.#cntRank.third += 1;
    } else if (cnt === 4) {
      this.#cntRank.fourth += 1;
    } else if (cnt === 3) {
      this.#cntRank.fifth += 1;
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

  calculateEarningRate(money) {
    const sum = this.#getSumOfWinningAmount();
    const earningRate = (sum / money) * 100;
    this.#earningRate = roundToOneDecimalPlace(earningRate);
  }

  #getSumOfWinningAmount() {
    return Object.entries(this.#cntRank).reduce((acc, entry) => {
      const [rank, cnt] = entry;
      return acc + cnt * WINNING_INFO[rank].prizeMoney;
    }, 0);
  }
}

export default ResultCalculator;
