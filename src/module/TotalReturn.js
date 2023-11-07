import { money } from '../Consts.js';

const totalReturn = (purchasedLottoAmount, matchCount) => {
  const totalWinning =
    matchCount.threeMatches * money.threeMatches +
    matchCount.fourMatches * money.fourMatches +
    matchCount.fiveMatches * money.fiveMatches +
    matchCount.fiveBonusMatches * money.fiveBonusMatches +
    matchCount.sixMatches * money.sixMatches;
  const tempReturn = (totalWinning / purchasedLottoAmount) * 100;
  return tempReturn.toFixed(1);
};

export default totalReturn;
