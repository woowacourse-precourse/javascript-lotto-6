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

const addCountOnResultBoard = (matchCount, numbers, bonus) => {
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

const addProfit = (matchNumber) => {
  switch (matchNumber[0]) {
    case MATCH_COUNT.three:
      return matchNumber[1] * PRIZE_MONEY.fifth;
    case MATCH_COUNT.four:
      return matchNumber[1] * PRIZE_MONEY.fourth;
    case MATCH_COUNT.five:
      return matchNumber[1] * PRIZE_MONEY.third;
    case MATCH_COUNT.fiveBonus:
      return matchNumber[1] * PRIZE_MONEY.second;
    case MATCH_COUNT.six:
      return matchNumber[1] * PRIZE_MONEY.first;
  }
};

const LottoResult = {
  calculateResultBoard(purchasedNumbers, lottoNumber, bonusNumber) {
    const resultBoard = { three: 0, four: 0, five: 0, fiveBonus: 0, six: 0 };
    let matchCount = 0;

    purchasedNumbers.forEach((numbers) => {
      matchCount = compareNumberArr(numbers, lottoNumber);
      let matchNumber = addCountOnResultBoard(matchCount, numbers, bonusNumber);
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
