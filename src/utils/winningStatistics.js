import mathcedCount from "./matchedCount.js";

async function winningMoney(winningMatchedResult, bonusMatchedResult) {
  let result = {
    three: 0,
    four: 0,
    five: 0,
    fiveAndBonus: 0,
    six: 0,
  };

  for (const key in winningMatchedResult) {
    mathcedCount(winningMatchedResult[key], bonusMatchedResult[key], result);
  }

  const TOTAL_GETMONEY =
    result.three * 5000 +
    result.four * 50000 +
    result.five * 1500000 +
    result.fiveAndBonus * 30000000 +
    result.six * 2000000000;

  return TOTAL_GETMONEY;
}

async function winningStatistics(
  purchaseAmout,
  winningMatchedResult,
  bonusMatchedResult
) {
  const totalMoney = await winningMoney(
    winningMatchedResult,
    bonusMatchedResult
  );
  const rateOfReturn = Math.round(totalMoney / purchaseAmout) * 100;
  return rateOfReturn;
}

export default winningStatistics;
