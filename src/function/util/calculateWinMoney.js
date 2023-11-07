export const calculateWinMoney = (winCount) => {
  const result = [
    {
      3: 0,
      winMoney: 0,
    },
    { 4: 0, winMoney: 0 },
    { 5: 0, winMoney: 0 },
    { 불일치5: 0, winMoney: 0 },
    { 6: 0, winMoney: 0 },
  ];

  winCount.forEach((el) => {
    if (el.count === 3) {
      result[0][3] += 1;
      result[0].winMoney += 5000;
    }

    if (el.count === 4) {
      result[1][4] += 1;
      result[1].winMoney += 50000;
    }

    if (el.count === 5) {
      result[2][5] += 1;
      result[2].winMoney += 150000;
    }

    if (el.count === 6 && el.bonusCount === 1) {
      result[3]["불일치5"] += 1;
      result[3].winMoney += 30000000;
    }

    if (el.count === 6 && el.bonusCount === 0) {
      result[4][6] += 1;
      result[4].winMoney += 2000000000;
    }
  });

  return result;
};
