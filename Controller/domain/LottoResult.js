import {
  MATCH_COUNT,
  PRIZE_MONEY,
  PURCHASE_PRICE,
} from '../../modules/constant';

const compareNumberArr = (baseArr, targetArr) => {
  let matchCount = 0;
  targetArr.forEach((number) => {
    if (baseArr.includes(number)) matchCount += 1;
  });

  return matchCount;
};

const addCount = (matchCount, numbers, bonus) => {
  switch (matchCount) {
    case 3:
      return MATCH_COUNT.three;
    case 4:
      return MATCH_COUNT.four;
    case 5:
      if (numbers.includes(bonus)) return MATCH_COUNT.fiveBonus;
      return MATCH_COUNT.five;
    case 6:
      return MATCH_COUNT.six;
    default:
      return MATCH_COUNT.zero;
  }
};

const addProfit = (number) => {
  const matchNumber = number[0];
  const matchCount = number[1];

  const profitObj = {
    [MATCH_COUNT.three]: PRIZE_MONEY.fifth,
    [MATCH_COUNT.four]: PRIZE_MONEY.fourth,
    [MATCH_COUNT.five]: PRIZE_MONEY.third,
    [MATCH_COUNT.fiveBonus]: PRIZE_MONEY.second,
    [MATCH_COUNT.six]: PRIZE_MONEY.first,
  };

  return matchCount * profitObj[matchNumber];
};

const LottoResult = {
  calculateResultBoard(purchasedNumbers, lottoNumber, bonusNumber) {
    const resultBoard = { three: 0, four: 0, five: 0, fiveBonus: 0, six: 0 };
    let matchCount = 0;

    purchasedNumbers.forEach((numbers) => {
      matchCount = compareNumberArr(numbers, lottoNumber);
      let matchNumber = addCount(matchCount, numbers, bonusNumber);
      if (matchNumber !== MATCH_COUNT.zero) resultBoard[matchNumber] += 1;
    });

    return resultBoard;
  },

  calculateProfit(purchaseAmount, resultBoard) {
    let totalProfit = 0;
    let profitPercent = 0;

    Object.entries(resultBoard).forEach((matchNumber) => {
      totalProfit += addProfit(matchNumber);
    });

    profitPercent = (totalProfit / (purchaseAmount * PURCHASE_PRICE)) * 100;

    return profitPercent.toFixed(1);
  },
};

export default LottoResult;
