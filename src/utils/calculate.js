import { NUMBER, REWARD, number } from '../constants.js';

const calculate = {
  countFrom: (money) => {
    return (Number(money) / NUMBER.DEFAULT_WON);
  },

  profitFrom: (rankCount, input) => {
    const first = (rankCount[number.first] * REWARD.FIRST);
    const second = (rankCount[number.second] * REWARD.SECOND);
    const third = (rankCount[number.third] * REWARD.THIRD);
    const fourth = (rankCount[number.fourth] * REWARD.FOURTH);
    const fifth = (rankCount[number.fifth] * REWARD.FIFTH);
    const total = (first + second + third + fourth + fifth);
    const profit = ((total / input) * NUMBER.DIVISOR).toFixed(NUMBER.DECIMAL);
    return profit;
  },
};

export default calculate;
