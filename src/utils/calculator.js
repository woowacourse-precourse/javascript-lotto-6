import {
  MATCH_3,
  MATCH_4,
  MATCH_5,
  MATCH_5_BONUS,
  MATCH_6,
  STATISTICS,
} from "../constants/statistics.js";

export const calculateProfit = (statics) => {
  let profit = 0;
  profit += statics[MATCH_3] * STATISTICS.three;
  profit += statics[MATCH_4] * STATISTICS.four;
  profit += statics[MATCH_5] * STATISTICS.five;
  profit += statics[MATCH_5_BONUS] * STATISTICS.five_bonus;
  profit += statics[MATCH_6] * STATISTICS.six;

  return profit;
};
