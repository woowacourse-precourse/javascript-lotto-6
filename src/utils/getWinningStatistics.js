import getMatchingNumbersCounts from './getMatchingNumbersCounts.js';
import getWinningStatisticsString from './getWinningStatisticsString.js';
import findFiveMatchWithBonus from './findFiveMatchWithBonus.js';

const getWinningStatistics = (lottos, winningNumbers, bonusNumber) => {
  const matchCounts = getMatchingNumbersCounts(lottos, winningNumbers);
  findFiveMatchWithBonus(lottos, matchCounts, bonusNumber);
  return getWinningStatisticsString(matchCounts);
};

export default getWinningStatistics;
