import CONSTANTS from '../constants/constants.js';
import swap from '../utils/swap.js';
import MESSAGE from '../constants/message.js';

class WinningStatistics {
  #winningStatistics;

  #winningStatisticsString;

  #lottos;
  
  constructor(lottos, winningNumbers, bonusNumber) {
    this.#lottos = lottos;
    this.#winningStatistics = this.#generateWinningStatistics(
      this.#lottos,
      winningNumbers,
      bonusNumber,
    );
    this.#winningStatisticsString = this.#generateWinningStatisticsString(this.#winningStatistics);
  }

  getWinningStatistics() {
    return this.#winningStatistics;
  }

  getWinningStaticsString() {
    return this.#winningStatisticsString;
  }

  #generateWinningStatistics(lottos, winningNumbers, bonusNumber) {
    const matchCounts = this.#getMatchingNumbersCounts(lottos, winningNumbers);
    return this.#findFiveMatchWithBonus(lottos, matchCounts, bonusNumber);
  }

  #generateWinningStatisticsString(matchCounts) {
    const winningStatisticsString = Object.keys(MESSAGE.winningStatistics).map(key => {
      const count = matchCounts.filter(winningstatistic => winningstatistic === Number(key)).length;
      return `${MESSAGE.winningStatistics[key]}${count}개`;
    });
    swap(winningStatisticsString);
    return winningStatisticsString;
  }

  #getMatchingNumbersCounts(lottos, winningNumbers) {
    return lottos.map(lotto => lotto.filter(item => winningNumbers.includes(item)).length);
  }

  #findFiveMatchWithBonus(lottos, matchCounts, bonusNumber) {
    const matchWithBonusCounts = [];
    const newMatchCounts = [...matchCounts];
    newMatchCounts.forEach((element, index) => {
      if (element === CONSTANTS.match.fiveMatch) {
        matchWithBonusCounts.push(index);
      }
    });
    matchWithBonusCounts.forEach(indice => {
      if (lottos[indice].includes(bonusNumber))
        newMatchCounts[indice] = CONSTANTS.match.fiveMatchWithBonus;
    });
    return newMatchCounts;
  }
}

export default WinningStatistics;
