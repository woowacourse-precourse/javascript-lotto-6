import View from './View.js';
import TicketMachine from './TicketMachine.js';
import Lotto from './Lotto.js';
import DrawMachine from './DrawMachine.js';
import ResultAnnouncer from './ResultAnnouncer.js';

class App {
  #state = {
    tickets: null,
    myNumbers: null,
    bonusNumber: null,
    rank: {
      FIFTH_RANK: 0,
      FOURTH_RANK: 0,
      THIRD_RANK: 0,
      SECOND_RANK: 0,
      FIRST_RANK: 0,
    },
  };

  constructor() {
    this.view = new View();
  }

  async #buyTickets() {
    const purchaseAmount = await this.view.getPurchaseAmount();
    this.ticketMachine = new TicketMachine(purchaseAmount);
    this.#state.tickets = this.ticketMachine.getNumberOfGame();
  }

  async #setlottoNumbers() {
    const lottoNumbersArray = await this.view.getLottoNumber();
    this.lotto = new Lotto(lottoNumbersArray);
    this.#state.myNumbers = lottoNumbersArray;
    this.#state.bonusNumber = await this.view.getBonusNumber(lottoNumbersArray);
  }

  #getWinStats() {
    this.drawMachine = new DrawMachine(this.#state);
    this.#state.rank = this.drawMachine.calculateWinningStats();
  }

  #announceResult() {
    this.resultAnnouncer = new ResultAnnouncer({
      tickets: this.#state.tickets,
      rank: this.#state.rank,
    });
    return this.resultAnnouncer.anounceProfit();
  }

  async play() {
    await this.#buyTickets();
    await this.#setlottoNumbers();
    this.#getWinStats();
    this.#announceResult();
  }
}

export default App;
