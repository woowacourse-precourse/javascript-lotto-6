import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './libs/constants';
import Lottos from './Lottos';
import WinningNumbers from './WinningNumbers';
import BonusNumber from './BonusNumber';
import { checkValue } from './libs/checkValue';

class App {
  constructor() {
    this.lottos = null;
    this.winningNumbers = null;
    this.bonusNumber = null;
  }

  async play() {
    await this.inputAmount();
  }

  async inputAmount() {
    try {
      const purchaseAmount = await Console.readLineAsync(MESSAGE.INPUT_AMOUNT);
      // Console.print(purchaseAmount);
      this.lottos = new Lottos(purchaseAmount);

      this.lottos.printTicketCount();
      this.lottos.printTickets();

      await this.inputWinningNumbers();
    } catch (error) {
      Console.print(error.message);
      const purchaseAmount = await Console.readLineAsync(MESSAGE.INPUT_AMOUNT);
      this.lottos = new Lottos(purchaseAmount);

      this.lottos.printTicketCount();
      this.lottos.printTickets();

      await this.inputWinningNumbers();
    }
  }

  async inputWinningNumbers() {
    try {
      let winningNumbers = await Console.readLineAsync(
        MESSAGE.INPUT_WINNGING_NUMBERS,
      );

      winningNumbers = winningNumbers.split(',').map(number => Number(number));
      this.winningNumbers = new WinningNumbers(winningNumbers);

      await this.inputBounsNumber();
    } catch (error) {
      Console.print(error.message);

      let winningNumbers = await Console.readLineAsync(
        MESSAGE.INPUT_WINNGING_NUMBERS,
      );

      winningNumbers = winningNumbers.split(',').map(number => Number(number));
      this.winningNumbers = new WinningNumbers(winningNumbers);

      await this.inputBounsNumber();
    }
  }

  async inputBounsNumber() {
    try {
      let bonusNumber = await Console.readLineAsync(MESSAGE.INPUT_BONUS_NUMBER);
      bonusNumber = Number(bonusNumber);
      this.bonusNumber = new BonusNumber(
        bonusNumber,
        this.winningNumbers.value,
      );

      this.printWinningStats();
    } catch (error) {
      Console.print(error.message);
      let bonusNumber = await Console.readLineAsync(MESSAGE.INPUT_BONUS_NUMBER);
      bonusNumber = Number(bonusNumber);
      this.bonusNumber = new BonusNumber(
        bonusNumber,
        this.winningNumbers.value,
      );

      this.printWinningStats();
    }
  }

  printWinningStats() {
    Console.print(MESSAGE.WINNING_STATS);

    // Console.print(this.winningNumbers.value, this.bonusNumber.value);

    const lottoRanks = this.lottos.calculateRanks(
      this.winningNumbers.value,
      this.bonusNumber.value,
    );

    this.lottos.printWinningDetails(lottoRanks);
    this.lottos.printRate(lottoRanks);
  }
}

export default App;
