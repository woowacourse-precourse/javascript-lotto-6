const ResultUtils = {
  compareNumberArr(baseArr, targetArr) {
    let matchCount = 0;
    targetArr.forEach((number) => {
      if (baseArr.includes(number)) matchCount += 1;
    });

    return matchCount;
  },

  addCountOnResultBoard(matchCount, numbers, bonus) {
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
  },

  addProfit(matchNumber) {
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
  },
};

export default ResultUtils;
