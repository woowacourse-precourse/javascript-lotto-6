import matchingNumbers from "./matchingNumbers.js";

const calculate = (excution, number, bonusNumber) => {
  let results = { "5등": 0, "4등": 0, "3등": 0, "2등": 0, "1등": 0 };

  for (let i = 0; i < excution.length; i++) {
    const result = excution[i].filter((item) => number.includes(item));
    const matchNumber = result.length;
    const bonusNumberIncludes = excution[i].includes(bonusNumber);
    results = matchingNumbers(matchNumber, bonusNumberIncludes, results);
  }
  return results;
};

export default calculate;
