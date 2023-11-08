import OutputView from '../views/OutputView';
import LottoMachine from './LottoMachine';

class Seller {
  #lottoMachine;

  constructor() {
    this.ticketList = [];
  }

  setAmount(money) {
    const amount = money % 1000;
    OutputView.printAmount(amount, this.makeLotto);
    this.setLottoTicket(amount);
  }

  setLottoTicket(amount) {
    this.#lottoMachine = new LottoMachine();
    for (let order = 0; order < amount; order += 1) {
      const ticket = this.#lottoMachine.makeTicket();
      this.ticketList.push(ticket);
    }
    OutputView.printTickets(this.ticketList);
  }
}

export default Seller;
