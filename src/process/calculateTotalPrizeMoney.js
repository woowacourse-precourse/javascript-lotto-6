import { num } from '../Constants.js';

function calculateTotalPrizeMoney(statistics) {
  const statisticsArray = Object.values(statistics);

  const prizeMoneyArray = [
    num.MATCH_3,
    num.MATCH_4,
    num.MATCH_5,
    num.MATCH_5_PLUS_BONUS,
    num.MATCH_6,
  ];

  return prizeMoneyArray.reduce((acc, cur, idx) => acc + cur * statisticsArray[idx], 0);
}

export default calculateTotalPrizeMoney;
