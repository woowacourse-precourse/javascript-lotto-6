import ResultUtils from '../../utils/ResultUtils';

const { compareNumberArr, addCountOnResultBoard, addProfit } = ResultUtils;

const LottoResult = {
  calculateResultBoard(lottoNumbers, winNumber, bonusNumber) {
    const resultBoard = { three: 0, four: 0, five: 0, fiveBonus: 0, six: 0 };
    let matchCount = 0;
    let matchNumber = '';

    lottoNumbers.forEach((numbers) => {
      matchCount = compareNumberArr(numbers, winNumber);
      matchNumber = addCountOnResultBoard(matchCount, numbers, bonusNumber);
      resultBoard[matchNumber] += 1;
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
