import { rewards } from "../constants.js";

const reward = {
  computeWinningAmount: function (matches) {
    let amount = 0;
    for (let i = 0; i < 5; i++) {
      amount += rewards[i] * matches[i];
    }

    return amount;
  },

  computeTotalReturn: function (winningAmount, purchaseAmount) {
    const result = (winningAmount / purchaseAmount) * 100;
    return parseFloat(result.toFixed(1));
  },
};

export default reward;
