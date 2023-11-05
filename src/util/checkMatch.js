/**
 * 각 로또별 일치 여부를 확인하고 카운트
 * @param {*} matchCount
 * @param {*} bonusCount
 * @param {{ three: 0, four: 0, five: 0, fiveAndBonus: 0, six: 0 }} match
 */
const checkMatch = (matchCount, bonusCount, match) => {
  if (matchCount === 3) match.three += 1;
  if (matchCount === 4) match.four += 1;
  if (matchCount === 5 && bonusCount === 0) match.five += 1;
  if (matchCount === 5 && bonusCount === 1) match.fiveAndBonus += 1;
  if (matchCount === 6) match.six += 1;
};

export default checkMatch;
