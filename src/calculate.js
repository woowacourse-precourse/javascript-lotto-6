import matchingNumbers from './matchingNumbers.js';
import LOTTO_RESULTS from './LOTTO_RESULTS.js';

export default function calculate(excution, number, bonusNumber) {
  for (let i = 0; i < excution.length; i++) {
    const result = excution[i].filter((item) => number.includes(item));
    const matchNumber = result.length;
    const bonusNumberIncludes = excution[i].includes(bonusNumber);
    matchingNumbers(matchNumber, bonusNumberIncludes, LOTTO_RESULTS);
  }
  return LOTTO_RESULTS;
}
