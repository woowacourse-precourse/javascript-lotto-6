import { REWARD } from './constants.js';

const calculate = {
  countFrom: (money) => {
    return (Number(money) / 1000);
  },

  profitFrom: (prizeResult, input) => {
    const first = (prizeResult.first * REWARD.FIRST);
    const second = (prizeResult.second * REWARD.SECOND);
    const third = (prizeResult.third * REWARD.THIRD);
    const fourth = (prizeResult.fourth * REWARD.FOURTH);
    const fifth = (prizeResult.fifth * REWARD.FIFTH);
    const total = (first + second + third + fourth + fifth);
    const profit = ((total / input) * 100).toFixed(1);
    return profit;
  },
};

export default calculate;
