import CONSTANTS from '../../../src/Lib/constans.js';
import { MessageFormat } from '../../../src/Lib/messageFormat.js';
import ResultReturn from '../../../src/Domain/Lotto/ResultReturn.js';

describe('ResultReturn', () => {
  let resultReturn;
  let matchingResult;
  let totalPurchaseAmount;

  beforeEach(() => {
    resultReturn = new ResultReturn();
    matchingResult = {
      3: 1,
      4: 2,
      5: 3,
      6: 4,
    };
    totalPurchaseAmount = 10000;
  });

  test('총 상금을 정확하게 계산하는지 테스트', () => {
    const expectedTotalPrizeAmount = Object.keys(matchingResult).reduce((total, key) => {
      const count = matchingResult[key];
      const prizeInfo = CONSTANTS.lottoPrizesMap.get(key);
      if (prizeInfo) total += prizeInfo.prize * count;
      return total;
    }, 0);

    const actualTotalPrizeAmount = resultReturn.getTotalPrizeAmount(matchingResult);

    expect(actualTotalPrizeAmount).toBe(expectedTotalPrizeAmount);
  });

  test('수익률을 제대로 리턴하는지 테스트', () => {
    const totalProfit = totalPurchaseAmount - resultReturn.getTotalPrizeAmount(matchingResult);
    const expectedReturnRate =
      Math.abs(1 - totalProfit / totalPurchaseAmount) * CONSTANTS.rate.percent;

    resultReturn.calculateReturnRate(matchingResult, totalPurchaseAmount);
    const result = resultReturn.getTotalPrizeAmount(matchingResult) / 100;
    expect(MessageFormat.totalReturnRate(result)).toBe(
      MessageFormat.totalReturnRate(expectedReturnRate),
    );
  });
});
