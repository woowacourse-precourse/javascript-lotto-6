import { Random } from "@woowacourse/mission-utils";

export const publishGameNums = (gameCnt) => {
  const gameNums = [];

  for (let i = 0; i < gameCnt; i++) {
    gameNums.push(Random.pickRandomNumbers(6, 1, 45).sort((a, b) => a - b));
  }

  return gameNums;
};

export const calcEarningRate = (amount, earn) => {
  return ((earn / amount) * 100).toFixed(1);
};
