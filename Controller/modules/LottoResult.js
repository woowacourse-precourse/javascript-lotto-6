import ResultUtils from '../../utils/ResultUtils';

const { compareNumberArr, addCountOnResultBoard, addProfit } = ResultUtils;

const LottoResult = {
  calculateResultBoard(lottoNumbers, winNumber, bonusNumber) {
    const resultBoard = { three: 0, four: 0, five: 0, fiveBonus: 0, six: 0 };
    let correctCount = 0;
    let correctNumber = '';

    lottoNumbers.forEach((numbers) => {
      correctCount = compareNumberArr(numbers, winNumber);
      correctNumber = addCountOnResultBoard(correctCount, numbers, bonusNumber);
      resultBoard[correctNumber] += 1;
    });

    return resultBoard;
  },

  calculateProfit(purchaseAmount, resultBoard) {
    let totalProfit = 0;
    let profitPercent = 0;

    Object.entries(resultBoard).forEach((correctNumber) => {
      totalProfit += addProfit(correctNumber);
    });

    profitPercent = (totalProfit / (purchaseAmount * 1000)) * 100;

    return profitPercent;
  },
};

export default LottoResult;
