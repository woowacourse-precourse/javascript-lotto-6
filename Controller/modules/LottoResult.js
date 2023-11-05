const LottoResult = {
  calculateNumbers(lottoNumbers, winNumber, bonusNumber) {
    const resultBoard = { three: 0, four: 0, five: 0, fiveBonus: 0, six: 0 };
    let correctCount = 0;

    lottoNumbers.forEach((numbers) => {
      numbers.forEach((number) => {
        if (winNumber.includes(number)) {
          correctCount += 1;
        }
      });
      if (correctCount === 5 && numbers.includes(bonusNumber)) {
        resultBoard.fiveBonus += 1;
        correctCount = 0;
      }
      switch (correctCount) {
        case 3:
          resultBoard.three += 1;
          break;
        case 4:
          resultBoard.four += 1;
          break;
        case 5:
          resultBoard.five += 1;
          break;
        case 6:
          resultBoard.six += 1;
          break;
      }
      correctCount = 0;
    });

    return resultBoard;
  },
  calculateProfit(purchaseAmount, resultBoard) {
    let totalProfit = 0;
    let profitPercent = 0;

    Object.entries(resultBoard).forEach((correctNumber) => {
      switch (correctNumber[0]) {
        case 'three':
          totalProfit += correctNumber[1] * 5000;
          break;
        case 'four':
          totalProfit += correctNumber[1] * 50000;
          break;
        case 'five':
          totalProfit += correctNumber[1] * 1500000;
          break;
        case 'fiveBonus':
          totalProfit += correctNumber[1] * 30000000;
          break;
        case 'six':
          totalProfit += correctNumber[1] * 2000000000;
          break;
      }
    });

    profitPercent = (totalProfit / (purchaseAmount * 1000)) * 100;

    return profitPercent;
  },
};

export default LottoResult;
