import selectSqlBonusLotto from '../@Repository/selectSqlBonusLotto.js';
import selectSqlWinningLotto from '../@Repository/selectSqlWinningLotto.js';
import CONSTANTS from '../../../../Util/Constants.js';

const getCorrectLottoCount = (userLotto) => {
  const winningLotto = selectSqlWinningLotto();
  return userLotto.reduce((correctCount, lottoNumber) => {
    if (winningLotto.includes(lottoNumber)) return correctCount + 1;
    return correctCount;
  }, 0);
};

const checkBonusInclude = (userLotto) => {
  const bonusLotto = selectSqlBonusLotto();
  if (userLotto.includes(bonusLotto)) return true;
  return false;
};

const compareAllUserLotto = (userLotto) => {
  return userLotto
    .filter((lottoNumber) => getCorrectLottoCount(lottoNumber) >= CONSTANTS.winnerLottoMinCount)
    .map((lottoNumber) => {
      const correctCount = getCorrectLottoCount(lottoNumber);
      if (correctCount === CONSTANTS.bonusCheckCount && checkBonusInclude(lottoNumber))
        return CONSTANTS.lottoCount + 1;

      return correctCount;
    });
};

const convertListToDict = (lottoCompareResult) => {
  const result = {};

  lottoCompareResult.forEach((count) => {
    if (result[count]) {
      return (result[count] += 1);
    }
    return (result[count] = 1);
  });
  return result;
};

const compareLotto = (userLotto) => {
  const lottoCompareResult = compareAllUserLotto(userLotto);
  return convertListToDict(lottoCompareResult);
};

const getProfitLotto = (compareResult) => {
  return Object.keys(compareResult).reduce((profit, count) => {
    return profit + CONSTANTS[count] * compareResult[count];
  }, 0);
};

export { compareLotto, getProfitLotto };
