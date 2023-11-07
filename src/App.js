import { Random, Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto';
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

  async play() {}

  inputAmount() {
    Console.readLineAsync(MESSAGE.INPUT_AMOUNT, amount => {
      this.lottos = new Lottos(amount);
      this.lottos.printTicketCount();
      this.lottos.printTickets();

      this.inputWinningNumbers;
    });
  }

  inputWinningNumbers() {
    Console.readLineAsync(MESSAGE.INPUT_WINNGING_NUMBERS, winningNumbers => {
      winningNumbers = winningNumbers.split(',').map(number => Number(number));
      this.winningNumbers = new WinningNumbers(winningNumbers);
    });

    this.inputBounsNumber;
  }

  inputBounsNumber() {
    Console.readLineAsync(MESSAGE.INPUT_BONUS_NUMBER, bonusNumber => {
      bonusNumber = Number(bonusNumber);
      this.bonusNumber = new BonusNumber(
        bonusNumber,
        this.winningNumbers.value,
      );
    });

    this.printWinningStats();
  }

  printWinningStats() {
    Console.print(MESSAGE.WINNING_STATS);

    const lottoRanks = this.lottos.calculateRanks(
      this.winningNumbers.value,
      this.bonusNumber.value,
    );
  }
}

export default App;
