import {
  FIRST_PRIZE,
  SECOND_PRIZE,
  THIRED_PRIZE,
  FOURTH_PRIZE,
  FIFTH_PRIZE,
} from "./constants.js";

export const calcProfitRate = (result, purchase_amount) => {
  let total_profit = 0;
  let total_rate = 0;
  let prize_arr = [
    FIRST_PRIZE,
    SECOND_PRIZE,
    THIRED_PRIZE,
    FOURTH_PRIZE,
    FIFTH_PRIZE,
  ];

  result.reverse().map((el, i) => (total_profit += el * prize_arr[i]));
  total_rate = ((total_profit / purchase_amount) * 100).toFixed(2);

  return total_rate;
};
