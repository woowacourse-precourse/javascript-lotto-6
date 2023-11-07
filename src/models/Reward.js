import { rewards } from "../constants";

const reward = {
  computeWinningAmount: function (matches) {
    let amount = 0;
    for (let i = 0; i < 5; i++) {
      amount += rewards[i] * matches[i];
    }

    return amount;
  },

  computeTotalReturn: function (winningAmount, purchaseAmount) {
    const result = (winningAmount / purchaseAmount) * 1000;
    return result.toFixed(2);
  },
};

export default reward;
