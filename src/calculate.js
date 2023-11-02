import matchingNumbers from "./matchingNumbers.js";

const calculate = (excution, number, bonusNumber) => {
  let results = [];
  for (let i = 0; i < excution.length; i++) {
    const result = excution[i].filter((item) => number.includes(item));
    const matchNumber = result.length;
    matchingNumbers(matchNumber, bonusNumber, excution[i], results);
  }
  return results;
};

export default calculate;
