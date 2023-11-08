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
  return lottoNumbers.filter(number => {
    return winningNumbers.includes(number);
  });
};

const matchedLottoNumbers = (lottoResults, matchedNumbers, matchedBonus) => {
  const updatedResults = { ...lottoResults };

  switch (matchedNumbers.length) {
    case 6:
      updatedResults[RESULT.FIRST] += 1;
      break;

    case 5:
      if (!matchedBonus) {
        updatedResults[RESULT.THIRD] += 1;
        break;
      }

      updatedResults[RESULT.SECOND] += 1;
      break;

    case 4:
      updatedResults[RESULT.FOURTH] += 1;
      break;

    case 3:
      updatedResults[RESULT.FIFTH] += 1;
      break;

    default:
      break;
  }

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

export { calculateProfit, calculateProfitRate, countIncludeNumbers, matchedLottoNumbers, filterLottoNumbers };
