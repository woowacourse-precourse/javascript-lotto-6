import View from './View.js';
import TicketMachine from './TicketMachine.js';
import Lotto from './Lotto.js';
import { INFO_MESSAGE } from './constants/messages.js';

class App {
  constructor() {
    this.tickets = [];
  }

  async play() {
    const purchaseAmount = await View.getUserInput(
      INFO_MESSAGE.PURCHASE_AMOUNT_ASK_MESSAGE,
    );

    this.ticketMachine = new TicketMachine(purchaseAmount);

    const lottoNumbers = await View.getUserInput(
      INFO_MESSAGE.LOTTO_NUMBERS_ASK_MESSAGE,
    );

    this.lotto = new Lotto(lottoNumbers.split(','));

    const bonusNumber = await View.getUserInput(
      INFO_MESSAGE.BONUS_NUMBER_ASK_MESSAGE,
    );
  }
}

export default App;
