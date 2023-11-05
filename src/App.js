import { INFO_MESSAGE } from './constants/messages.js';

import View from './View.js';
import TicketMachine from './TicketMachine.js';
import Lotto from './Lotto.js';

class App {
  #state = { ticktes: null, numbers: null, bonus: null };

  buyTickets(purchaseAmount) {
    this.ticketMachine = new TicketMachine(purchaseAmount);
    this.#state.ticktes = this.ticketMachine.getNumberOfGame();
  }

  async setlottoNumbers(lottoNumbers) {
    const lottoNumbersArray = lottoNumbers.split(',').map(Number);
    this.lotto = new Lotto(lottoNumbersArray);
    this.#state.numbers = lottoNumbersArray;
    this.#state.bonus = await Lotto.getBonusNumber(lottoNumbersArray);
  }

  async play() {
    const purchaseAmount = await View.getUserInput(
      INFO_MESSAGE.PURCHASE_AMOUNT_ASK_MESSAGE,
    );
    this.buyTickets(purchaseAmount);

    const lottoNumbers = await View.getUserInput(
      INFO_MESSAGE.LOTTO_NUMBERS_ASK_MESSAGE,
    );
    await this.setlottoNumbers(lottoNumbers);
  }
}

export default App;
