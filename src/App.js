import { Random, Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto';
import { MESSAGE } from './libs/constants';
import Lottos from './Lottos';
import WinningNumbers from './WinningNumbers';

class App {
  constructor() {
    this.lottos = null;
    this.winningNumbers = null;
    this.bonusNumbers = null;
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
}

export default App;
