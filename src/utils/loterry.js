/* eslint-disable implicit-arrow-linebreak */
import { RANKS } from "./CONSTANT";

const getRank = (matchingCount, matchingBonus) => {
  if (matchingCount === 3) return "fifth";
  if (matchingCount === 4) return "fourth";
  if (matchingCount === 5) {
    if (!matchingBonus) {
      return "third";
    }
    return "second";
  }
  if (matchingCount === 6) return "first";
  return null;
};

const getTotalProfit = (result) =>
  RANKS.reduce((acc, rank) => {
    const count = result.filter((r) => r === rank.rank).length;
    return acc + rank.prize * count;
  }, 0);

export { getRank, getTotalProfit };
