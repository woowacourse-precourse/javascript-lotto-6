import { money } from '../Consts.js';

const totalReturn = (purchasedLotto, matchCount) => {
  const totalWinning =
    matchCount.threeMatches * money.threeMatches +
    matchCount.fourMatches * money.fourMatches +
    matchCount.fiveMatches * money.fiveMatches +
    matchCount.fiveBonusMatches * money.fiveBonusMatches +
    matchCount.sixMatches * money.sixMatches;
  const tempReturn = totalWinning / purchasedLotto;
  return Number(tempReturn.toFixed(2));
};

export default totalReturn;
