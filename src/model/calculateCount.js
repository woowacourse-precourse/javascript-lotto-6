const calculateCounts = (result, count) => {
  if (count === 3) {
    result.three++;
  }
  if (count === 4) {
    result.four++;
  }
  if (count === 5 && matchingNumberArr === 4) {
    result.bonus++;
  }
  if (count === 5 && matchingNumberArr === 5) {
    result.five++;
  }
  if (count === 6) {
    result.six++;
  }
  if (count === 0 || count === 1 || count === 2) {
    result.zero++;
  }
  return result;
};
const calculateProfitRatio = (result) => {
  const money = {
    zero: 0,
    three: 5000,
    four: 50000,
    five: 1500000,
    bonus: 30000000,
    six: 2000000000,
  };
  let total =
    money.three * result.three +
    money.four * result.four +
    money.five * result.five +
    money.bonus * result.bonus +
    money.six * result.six;

  return total;
};

const calculateResult = (matchingNumberArr, bonusArr) => {
  const result = {
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    bonus: 0,
    zero: 0,
  };
  for (let i = 0; i < matchingNumberArr.length; i++) {
    let count = matchingNumberArr[i] + bonusArr[i];
    calculateCounts(result, count);
  }
  return result;
};

export { calculateCounts, calculateProfitRatio, calculateResult };
