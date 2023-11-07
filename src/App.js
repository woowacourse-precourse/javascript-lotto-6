import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './libs/constants';
import Lottos from './Lottos';
import WinningNumbers from './WinningNumbers';
import BonusNumber from './BonusNumber';

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
    const purchaseAmount = await Console.readLineAsync(MESSAGE.INPUT_AMOUNT);
    // Console.print(purchaseAmount);
    this.lottos = new Lottos(purchaseAmount);
    this.lottos.printTicketCount();
    this.lottos.printTickets();

    await this.inputWinningNumbers;
  }

  async inputWinningNumbers() {
    const winningNumbers = await Console.readLineAsync(
      MESSAGE.INPUT_WINNGING_NUMBERS,
    );
    winningNumbers = winningNumbers.split(',').map(number => Number(number));
    this.winningNumbers = new WinningNumbers(winningNumbers);
    // Console.readLineAsync(MESSAGE.INPUT_WINNGING_NUMBERS, winningNumbers => {
    //   winningNumbers = winningNumbers.split(',').map(number => Number(number));
    //   this.winningNumbers = new WinningNumbers(winningNumbers);
    // });

    await this.inputBounsNumber;
  }

  async inputBounsNumber() {
    const bonusNumber = await Console.readLineAsync(MESSAGE.INPUT_BONUS_NUMBER);
    bonusNumber = Number(bonusNumber);
    this.bonusNumber = new BonusNumber(bonusNumber, this.winningNumbers.value);
    // Console.readLineAsync(MESSAGE.INPUT_BONUS_NUMBER, bonusNumber => {
    //   bonusNumber = Number(bonusNumber);
    //   this.bonusNumber = new BonusNumber(
    //     bonusNumber,
    //     this.winningNumbers.value,
    //   );
    // });

    this.printWinningStats();
  }

  printWinningStats() {
    Console.print(MESSAGE.WINNING_STATS);

    const lottoRanks = this.lottos.calculateRanks(
      this.winningNumbers.value,
      this.bonusNumber.value,
    );

    this.lottos.printWinningDetails(lottoRanks);
    this.lottos.printRate(lottoRanks);
  }
}

export default App;
