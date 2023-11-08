import CONSTANTS from '../constants/constants.js';

const findFiveMatchWithBonus = (lottos, matchCounts, bonusNumber) => {
  const matchWithBonuscCounts = [];
  matchCounts.forEach((element, index) => {
    if (element === CONSTANTS.match.fiveMatch) {
      matchWithBonuscCounts.push(index);
    }
  });
  matchWithBonuscCounts.forEach(indice => {
    if (lottos[indice].includes(bonusNumber))
      matchCounts[indice] = CONSTANTS.match.fiveMatchWithBonus;
  });
};

export default findFiveMatchWithBonus;
