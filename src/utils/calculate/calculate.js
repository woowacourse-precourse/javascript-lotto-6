import { PRIZE_MONEY, RESULT } from '../../constants/constants.js';

const calculateProfit = winningResults => {
  let winningPrice = 0;

  Object.keys(winningResults).forEach(rank => {
    winningPrice += winningResults[rank] * PRIZE_MONEY[rank];
  });

  return winningPrice;
};

const calculateProfitRate = (startMoney, winningMoney) => {
  const rate = ((winningMoney / startMoney) * 100).toFixed(1);

  return Number(rate);
};

const filterLottoNumbers = (winningNumbers, lottoNumbers) => {
  const filteredNumber = lottoNumbers.filter(number => {
    return winningNumbers.includes(number);
  });

  return filteredNumber;
};

const matchedLottoNumbers = (lottoResults, matchedNumbers, matchedBonus) => {
  const updatedResults = { ...lottoResults };

  if (matchedNumbers.length === 6) updatedResults[RESULT.FIRST] += 1;
  if (matchedNumbers.length === 5 && matchedBonus) updatedResults[RESULT.SECOND] += 1;
  if (matchedNumbers.length === 5) updatedResults[RESULT.THIRD] += 1;
  if (matchedNumbers.length === 4) updatedResults[RESULT.FOURTH] += 1;
  if (matchedNumbers.length === 3) updatedResults[RESULT.FIFTH] += 1;

  return updatedResults;
};

const countIncludeNumbers = (lottoResults, winningNumbers, bonusNumber, lottoNumbersArray) => {
  const updatedLottoResults = { ...lottoResults };

  lottoNumbersArray.forEach(lottoNumbers => {
    const matchedNumbers = filterLottoNumbers(winningNumbers, lottoNumbers);
    const matchedBonus = lottoNumbers.includes(bonusNumber);
    const updatingLottoResults = matchedLottoNumbers(updatedLottoResults, matchedNumbers, matchedBonus);
    Object.assign(updatedLottoResults, updatingLottoResults);
  });

  return updatedLottoResults;
};

export { calculateProfit, calculateProfitRate, countIncludeNumbers };
