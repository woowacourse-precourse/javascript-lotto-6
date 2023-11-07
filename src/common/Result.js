import { rankReward } from "./Text.js";

let rank = {
  three: 0,
  four: 0,
  five: 0,
  bonus: 0,
  six: 0,
};

export const checkResult = (lottos, winning, bonus) => {
  const winningNumbers = [...winning, ...bonus];

  lottos.map((lotto) => {
    let combiningTwoArr = [...lotto, ...winningNumbers];
    let setTwoArr = new Set(combiningTwoArr);

    if (combiningTwoArr.length !== setTwoArr.size) {
      let gabNumber = combiningTwoArr.length - setTwoArr.size;
      // 비교하는 함수
      measureRank(gabNumber, lotto, bonus);
    }
  });

  return rank;
};

const measureRank = (gabNumber, lotto, bonus) => {
  switch (gabNumber) {
    case 3:
      rank.three += 1;
      break;
    case 4:
      rank.four += 1;
      break;
    case 5:
      lotto.includes(bonus[0]) ? (rank.five += 1) : (rank.bonus += 1);
      break;
    case 6:
      rank.six += 1;
  }
};

export const calculateRevenue = (rank, money) => {
  let total = 0;
  for (const key in rank) {
    total += rank[key] * rankReward[key];
  }
  return ((total / money) * 100).toFixed(1);
};
