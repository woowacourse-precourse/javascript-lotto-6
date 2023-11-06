const compareNumberArr = (baseArr, targetArr) => {
  let matchCount = 0;
  targetArr.forEach((number) => {
    if (baseArr.includes(number)) matchCount += 1;
  });

  return matchCount;
};

const addCountOnResultBoard = (matchCount, numbers, bonus) => {
  switch (matchCount) {
    case 3:
      return 'three';
    case 4:
      return 'four';
    case 5:
      if (numbers.includes(bonus)) return 'fiveBonus';
      return 'five';
    case 6:
      return 'six';
  }
  return 'zero';
};

const addProfit = (matchNumber) => {
  switch (matchNumber[0]) {
    case 'three':
      return matchNumber[1] * 5000;
    case 'four':
      return matchNumber[1] * 50000;
    case 'five':
      return matchNumber[1] * 1500000;
    case 'fiveBonus':
      return matchNumber[1] * 30000000;
    case 'six':
      return matchNumber[1] * 2000000000;
  }
};

const LottoResult = {
  calculateResultBoard(purchasedNumbers, lottoNumber, bonusNumber) {
    const resultBoard = { three: 0, four: 0, five: 0, fiveBonus: 0, six: 0 };
    let matchCount = 0;

    purchasedNumbers.forEach((numbers) => {
      matchCount = compareNumberArr(numbers, lottoNumber);
      let matchNumber = addCountOnResultBoard(matchCount, numbers, bonusNumber);
      if (matchNumber !== 'zero') resultBoard[matchNumber] += 1;
    });

    return resultBoard;
  },

  calculateProfit(purchaseAmount, resultBoard) {
    let totalProfit = 0;
    let profitPercent = 0;

    Object.entries(resultBoard).forEach((matchNumber) => {
      totalProfit += addProfit(matchNumber);
    });

    profitPercent = (totalProfit / (purchaseAmount * 1000)) * 100;

    return profitPercent.toFixed(1);
  },
};

export default LottoResult;
