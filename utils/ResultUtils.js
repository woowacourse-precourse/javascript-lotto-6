const ResultUtils = {
  compareNumberArr(baseArr, targetArr) {
    let correctCount = 0;
    targetArr.forEach((number) => {
      if (baseArr.includes(number)) correctCount += 1;
    });

    return correctCount;
  },

  addCountOnResultBoard(count, numbers, bonus) {
    switch (count) {
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

  addProfit(correctNumber) {
    switch (correctNumber[0]) {
      case 'three':
        return correctNumber[1] * 5000;
      case 'four':
        return correctNumber[1] * 50000;
      case 'five':
        return correctNumber[1] * 1500000;
      case 'fiveBonus':
        return correctNumber[1] * 30000000;
      case 'six':
        return correctNumber[1] * 2000000000;
    }
  },
};

export default ResultUtils;
