import {
  MATCH_3,
  MATCH_4,
  MATCH_5,
  MATCH_5_BONUS,
  MATCH_6,
} from "../constants/statistics.js";

export const calculateStatistics = (lottoArray, winnerLotto, bonus) => {
  const statics = {
    [MATCH_3]: 0,
    [MATCH_4]: 0,
    [MATCH_5]: 0,
    [MATCH_5_BONUS]: 0,
    [MATCH_6]: 0,
  };

  lottoArray.forEach((lotto) => {
    const machedNumber = lotto.filter((number) => winnerLotto.includes(number));
    const isIncludeBonus = lotto.includes(Number(bonus));
    const machedCount = machedNumber.length;

    if (machedCount === 3) {
      statics[machedCount] += 1;
    }
    if (machedCount === 4) {
      statics[machedCount] += 1;
    }
    if (machedCount === 5) {
      if (isIncludeBonus) {
        statics[`${machedCount}+`] += 1;
      } else {
        statics[machedCount] += 1;
      }
    }
    if (machedCount === 6) {
      statics[machedCount] += 1;
    }
  });

  return statics;
};
