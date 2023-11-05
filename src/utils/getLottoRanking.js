import { Console } from "@woowacourse/mission-utils";
import { lottoCount } from "../constants/constants.js";
import { winningMessage } from "../constants/messages.js";

export const getRanking = (countArray) => {
  const rank = {
    FIFTH: 0,
    FORTH: 0,
    THIRD: 0,
    SECOND: 0,
    FIRST: 0,
  };

  countArray.forEach((count) => {
    const rankKey = Object.keys(rank).find((key) => count === lottoCount[key]);
    if (rankKey) {
      rank[rankKey]++;
    }
  });
  return rank;
};

export const getRankResult = (rank) => {
  for (const key in rank) {
    Console.print(`${winningMessage[key]} ${rank[key]}개`);
  }
};
