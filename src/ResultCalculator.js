import LOTTO from './constants/lotto.js';
import { WINNING_INFO, RANK } from './constants/winningInfo.js';
import { roundToOneDecimalPlace } from './utils/function.js';

class ResultCalculator {
  #cntRank;

  #earningRate;

  constructor() {
    this.#cntRank = {
      [RANK.first]: 0,
      [RANK.second]: 0,
      [RANK.third]: 0,
      [RANK.fourth]: 0,
      [RANK.fifth]: 0,
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
    if (cnt < RANK.fifth) {
      return;
    }
    if (cnt === 5 && this.#isBonusMatch(lotto, winningLotto)) {
      this.#cntRank[RANK.second] += 1;
      return;
    }
    this.#cntRank[cnt] += 1;
  }

  #isBonusMatch(lotto, winningLotto) {
    return lotto.numbers.includes(winningLotto.bonusNumber);
  }

  #countMatchingNumbers(lotto, winningLotto) {
    const SetLottos = new Set([...lotto.numbers, ...winningLotto.numbers]);
    const numberOfMatchingNumbers = LOTTO.size * 2 - SetLottos.size;
    return numberOfMatchingNumbers;
  }

  getEarningRate(money) {
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
