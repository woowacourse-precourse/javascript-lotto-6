import { Console, Random } from '@woowacourse/mission-utils';
import { MESSAGE, LOTTERY, LOTTERY_WINNINGS } from './constants.js';
import LottoManager from './LottoManager.js';
import InputManager from './InputManager.js';
import { NumberConverter, ArrayConverter } from './utils/converter.js';

export default class Computer {
  constructor() {
    this.resetLotto();
  }

  async getPurchaseAmountFromUserInput() {
    this.purchaseAmount = await InputManager.getPurchaseAmount();
  }

  async getWinningNumbersrFromUserInput() {
    this.winningNumbers = await InputManager.getWinningNumbers();
  }

  async getBonusNumberFromUserInput() {
    this.bonusNumber = await InputManager.getBonusNumber(this.winningNumbers);
  }

  issueLottoForPurchaseAmount() {
    const lottoCnt = this.purchaseAmount / 1000;
    Console.print(MESSAGE.PURCHASE_COUNT(lottoCnt));
    for (let count = 0; count < lottoCnt; count++) {
      this.lottos.push(LottoManager.issueLotto());
    }
  }

  printLotto() {
    this.lottos.forEach((lotto) =>
      Console.print(ArrayConverter.convertArrayToString(lotto.getNumbers())),
    );
  }

  printLottoWinningStatistics() {
    this.result = this.getLottoResults();
    Console.print(MESSAGE.WINNING_STATISTICS);
    Console.print(MESSAGE.DASHES);
    for (let i = 5; i >= 1; i -= 1) {
      const { label, winnings } = LOTTERY_WINNINGS.get(i);
      const commaWinnings = NumberConverter.splitIntoThreeDigitWithComma(winnings);
      Console.print(MESSAGE.MATCH_LOTTO_COUNT(label, commaWinnings, this.result[i]));
    }
  }

  printTotalRateOfReturn() {
    const totalWinnings = this.getTotalWinnings();
    const rateOfReturn = Number(((totalWinnings / this.purchaseAmount) * 100).toFixed(1));
    const commaRateOfReturn = NumberConverter.splitIntoThreeDigitWithCommaContainingDecimalPoint(
      rateOfReturn,
      1,
    ).toString();
    Console.print(MESSAGE.TOTAL_RATE_OF_RETURN(commaRateOfReturn));
  }

  getLottoResults() {
    return this.lottos.reduce((result, lotto) => {
      const newResult = [...result];
      const place = lotto.getWinningPlace(this.winningNumbers, this.bonusNumber);
      newResult[place] += 1;
      return newResult;
    }, Array(6).fill(0));
  }

  getTotalWinnings() {
    const winnings = [
      LOTTERY_WINNINGS.get(LOTTERY.DEFAULT_PLACE).winnings,
      LOTTERY_WINNINGS.get(LOTTERY.FIRST_PLACE).winnings,
      LOTTERY_WINNINGS.get(LOTTERY.SECOND_PLACE).winnings,
      LOTTERY_WINNINGS.get(LOTTERY.THIRD_PLACE).winnings,
      LOTTERY_WINNINGS.get(LOTTERY.FOURTH_PLACE).winnings,
      LOTTERY_WINNINGS.get(LOTTERY.FIFTH_PLACE).winnings,
    ];
    return this.result.reduce((total, curCnt, place) => {
      return total + curCnt * winnings[place];
    }, 0);
  }

  resetLotto() {
    this.purchaseAmount = 0;
    this.bonusNumber = 0;
    this.winningNumbers = [];
    this.lottos = [];
    this.result = [];
  }
}
