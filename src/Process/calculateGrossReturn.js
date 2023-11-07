import { num } from '../Constants.js';

function calculateGrossReturn(purchaseAmount, statistics) {
  const statisticsArray = Object.values(statistics);

  const prizeMoneyArray = [
    num.MATCH_3,
    num.MATCH_4,
    num.MATCH_5,
    num.MATCH_5_PLUS_BONUS,
    num.MATCH_6,
  ];

  const totalPrizeMoney = prizeMoneyArray.reduce(
    (acc, cur, idx) => acc + cur * statisticsArray[idx],
    0
  );

  const grossReturn = Math.round((totalPrizeMoney / purchaseAmount) * 100 * 10) / 10;

  return grossReturn;
}

export default calculateGrossReturn;
