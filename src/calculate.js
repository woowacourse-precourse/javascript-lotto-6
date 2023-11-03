import matchingNumbers from "./matchingNumbers.js";
import lottoResults from "./lottoResults.js";

const calculate = (excution, number, bonusNumber) => {
  for (let i = 0; i < excution.length; i++) {
    const result = excution[i].filter((item) => number.includes(item));
    const matchNumber = result.length;
    const bonusNumberIncludes = excution[i].includes(bonusNumber);
    matchingNumbers(matchNumber, bonusNumberIncludes, lottoResults);
  }
  return lottoResults;
};
export default calculate;
