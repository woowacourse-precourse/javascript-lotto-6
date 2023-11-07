import LottoMachine from './Controller/LottoMachine.js';
import TicketMachine from './Controller/TicketMachine.js';
import WinStastics from './Controller/WinStastics.js';
import Printer from './View/Printer.js';
import LottoTicket from './Model/LottoTicket.js';

class App {
  constructor() {
    this.lottoMachine = new LottoMachine();
    this.ticketMachine = new TicketMachine();
    this.winStastics = new WinStastics();
    this.lottoTicket = LottoTicket.getInstance();
  }

  async play() {
    await this.ticketMachine.buyTicket();
    Printer.printLottoTicket(this.lottoTicket.ticket);

    await this.lottoMachine.createWinNum();
    await this.lottoMachine.createBonusNum();

    this.winStastics.setMatchesCount();
    this.winStastics.setEarningRate();
    Printer.printStastics(this.winStastics.statics);
  }
}

export default App;
