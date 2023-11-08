import getMatchingNumbersCounts from './getMatchingNumbersCounts.js';
import findFiveMatchWithBonus from './findFiveMatchWithBonus.js';
import CONSTANTS from '../constants/constants.js';

const getReturns = (lottos, winningNumbers, bonusNumber) => {
  const matchCounts = getMatchingNumbersCounts(lottos, winningNumbers);
  findFiveMatchWithBonus(lottos, matchCounts, bonusNumber);
  return matchCounts
    .map(matchCount => CONSTANTS.prize[matchCount])
    .filter(item => item !== undefined);
};

export default getReturns;
