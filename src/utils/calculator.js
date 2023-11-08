import {
  MATCH_3,
  MATCH_4,
  MATCH_5,
  MATCH_5_BONUS,
  MATCH_6,
  STATISTICS,
} from "../constants/statistics.js";

export const calculateProfit = (statistics) => {
  let totalProfit = 0;
  totalProfit += statistics[MATCH_3] * STATISTICS.THREE;
  totalProfit += statistics[MATCH_4] * STATISTICS.FOUR;
  totalProfit += statistics[MATCH_5] * STATISTICS.FIVE;
  totalProfit += statistics[MATCH_5_BONUS] * STATISTICS.FIVE_BONUS;
  totalProfit += statistics[MATCH_6] * STATISTICS.SIX;

  return totalProfit;
};

export const calculateStatistics = (lottoArray, winnerLotto, bonus) => {
  const statistics = initializeStatistics();

  lottoArray.forEach((lotto) => {
    updateStatistics(statistics, lotto, winnerLotto, bonus);
  });

  return statistics;
};

const initializeStatistics = () => {
  return {
    [MATCH_3]: 0,
    [MATCH_4]: 0,
    [MATCH_5]: 0,
    [MATCH_5_BONUS]: 0,
    [MATCH_6]: 0,
  };
};

const updateStatistics = (stats, lotto, winnerLotto, bonus) => {
  const matchedNumbers = countMatchedNumbers(lotto, winnerLotto);
  const isIncludeBonus = lotto.includes(Number(bonus));

  if (matchedNumbers === 3) {
    stats[matchedNumbers] += 1;
  } else if (matchedNumbers === 4) {
    stats[matchedNumbers] += 1;
  } else if (matchedNumbers === 5) {
    if (isIncludeBonus) {
      stats[`${matchedNumbers}+`] += 1;
    } else {
      stats[matchedNumbers] += 1;
    }
  } else if (matchedNumbers === 6) {
    stats[matchedNumbers] += 1;
  }
};

const countMatchedNumbers = (lotto, winnerLotto) => {
  const matchedNumbers = lotto.filter((number) => winnerLotto.includes(number));
  return matchedNumbers.length;
};
