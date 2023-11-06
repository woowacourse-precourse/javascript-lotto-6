import ResultUtils from '../../utils/ResultUtils.js';

const { compareNumberArr, addCountOnResultBoard, addProfit } = ResultUtils;

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

    return profitPercent;
  },
};

export default LottoResult;
