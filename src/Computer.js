import { Console, Random } from '@woowacourse/mission-utils';
import { MESSAGE, LOTTERY, LOTTERY_WINNINGS } from './constants.js';
import Lotto from './Lotto.js';
import UserInput from './UserInput.js';
import { NumberConverter } from '../src/utils/NumberConverter.js';

export default class Computer {
  constructor() {
    this.resetLotto();
  }

  async issueLottoForUserInput() {
    const purchaseAmount = await UserInput.getPurchaseAmount();
    const lottoCnt = purchaseAmount / 1000;
    Console.print(MESSAGE.PURCHASE_COUNT(lottoCnt));

    for (let count = 0; count < lottoCnt; count++) {
      this.issueLotto();
    }
  }

  async getWinningNumbersrFromUserInput() {
    this.winningNumbers = await UserInput.getWinningNumbers();
  }

  async getBonusNumberFromUserInput() {
    this.bonusNumber = await UserInput.getBonusNumber(this.winningNumbers);
  }

  issueLotto() {
    const randNum = Random.pickUniqueNumbersInRange(
      LOTTERY.MIN_NUM,
      LOTTERY.MAX_NUM,
      LOTTERY.NUM_COUNT,
    );

    this.lottos.push(new Lotto(randNum));
  }

  printLotto() {
    this.lottos.forEach((lotto) => Console.print(lotto.getNumbers()));
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
    this.winningNumbers = [];
    this.bonusNumber = 0;
    this.lottos = [];
    this.result = [];
  }
}
