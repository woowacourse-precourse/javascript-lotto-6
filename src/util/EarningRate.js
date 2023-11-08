import { REGEX } from "../constants/BusinessNumber.js";

export const getEarningRate = (firstAmount, finalAmount) => {
  const earningRate = (finalAmount - firstAmount) * 100 / firstAmount;
  
  if (earningRate < 0) {
    return (earningRate + 100).toFixed(1).toString().replace(REGEX.numberSplit,",");
  }

  return earningRate.toFixed(1).toString().replace(REGEX.numberSplit,",");
};
