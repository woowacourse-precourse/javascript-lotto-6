import { RESULT } from '../../constants/constants.js';

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

export { countIncludeNumbers };
