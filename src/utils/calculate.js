import { NUMBER, REWARD } from '../constants.js';

const calculate = {
  countFrom: (money) => {
    return (Number(money) / NUMBER.DEFAULT_WON);
  },

  profitFrom: (prizeResult, input) => {
    const first = (prizeResult.first * REWARD.FIRST);
    const second = (prizeResult.second * REWARD.SECOND);
    const third = (prizeResult.third * REWARD.THIRD);
    const fourth = (prizeResult.fourth * REWARD.FOURTH);
    const fifth = (prizeResult.fifth * REWARD.FIFTH);
    const total = (first + second + third + fourth + fifth);
    const profit = ((total / input) * NUMBER.DIVISOR).toFixed(NUMBER.DECIMAL);
    return profit;
  },
};

export default calculate;
