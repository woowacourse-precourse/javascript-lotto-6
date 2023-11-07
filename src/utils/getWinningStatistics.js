import getMatchingNumbersCounts from './getMatchingNumbersCounts.js';
import getWinningStatisticsString from './getWinningStatisticsString.js';
import findFiveMatchWithBonus from './findFiveMatchWithBonus.js';

const getWinningStatistics = (lottos, winningNumbers, bonusNumber) => {
  const matchCounts = getMatchingNumbersCounts(lottos, winningNumbers);
  findFiveMatchWithBonus(lottos, matchCounts, bonusNumber);
  const winningStatisticsString = getWinningStatisticsString(matchCounts);

  return winningStatisticsString;
};

export default getWinningStatistics;
