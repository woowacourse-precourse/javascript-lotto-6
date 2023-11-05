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

    for (let correctNumber in resultBoard) {
      let correctCount = resultBoard[correctNumber];

      switch (correctNumber) {
        case 'three':
          totalProfit += correctCount * 5000;
          break;
        case 'four':
          totalProfit += correctCount * 50000;
          break;
        case 'five':
          totalProfit += correctCount * 1500000;
          break;
        case 'fiveBonus':
          totalProfit += correctCount * 30000000;
          break;
        case 'six':
          totalProfit += correctCount * 2000000000;
          break;
      }
    }

    profitPercent = (totalProfit / (purchaseAmount * 1000)) * 100;

    return profitPercent;
  },
};

export default LottoResult;
