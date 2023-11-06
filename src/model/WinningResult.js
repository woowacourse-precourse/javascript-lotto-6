import MESSAGES from '../constants/messages.js';
import { printMessage } from '../utils/printMessage.js';

class WinningResult {
  constructor(
    purchaseAmount,
    userLottoNumbers,
    userBonusNumber,
    winningNumbers,
  ) {
    this.purchaseAmount = purchaseAmount;
    this.userNumbers = userLottoNumbers;
    this.bonusNumber = userBonusNumber;
    this.winningNumberList = winningNumbers;
    this.calculateWinning();
  }

  calculateWinning() {
    const result = this.winningNumberList.map(winningNumbers =>
      this.checkMatch(winningNumbers),
    );
    this.getWinningList(result);
  }

  checkMatch(winningNumbers) {
    let count = 0;
    winningNumbers.forEach(winningNumber => {
      this.userNumbers.forEach(userNumber => {
        if (winningNumber === Number(userNumber)) count += 1;
      });
    });
    if (count === 5 && winningNumbers.includes(Number(this.bonusNumber)))
      return 'bonus';
    return count;
  }

  getWinningList(result) {
    const initResult = Array.from({ length: 5 }, () => 0);
    result.forEach(e => {
      if (e === 3) {
        initResult[0] += 1;
      }
      if (e === 4) {
        initResult[1] += 1;
      }
      if (e === 5) {
        initResult[2] += 1;
      }
      if (e === 'bonus') {
        initResult[3] += 1;
      }
      if (e === 6) {
        initResult[4] += 1;
      }
    });
    this.printResult(initResult);
  }

  printResult(winningResult) {
    const messages = [
      MESSAGES.matchThree,
      MESSAGES.matchFour,
      MESSAGES.matchFive,
      MESSAGES.matchFiveAndBonus,
      MESSAGES.matchSix,
    ];

    printMessage(MESSAGES.winningResult);
    printMessage(MESSAGES.divisionLine);

    const prize = [5000, 50000, 1500000, 30000000, 2000000000];

    let totalPrize = 0;

    winningResult.forEach((result, index) => {
      if (result !== 0) {
        totalPrize += result * prize[index];
      }
      printMessage(`${messages[index]}${result}개`);
    });

    this.calcualteProfit(this.purchaseAmount, totalPrize);
  }

  calcualteProfit(purchaseAmount, totalPrize) {
    const profit = (totalPrize / purchaseAmount) * 100;
    if (profit % 0.01) {
      profit.toFixed(2);
    }
    printMessage(`${MESSAGES.profitRate}${profit}%입니다.`);
  }
}

export default WinningResult;
