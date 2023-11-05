import LottoTicket from '../model/LottoTicket.js';

class LottoService {
  #purchaseMoney;
  #tickets;

  constructor(purchaseMoney) {
    this.#purchaseMoney = purchaseMoney;
  }

  issueTickets() {
    this.#tickets = new LottoTicket(this.#purchaseMoney).getTickets();
    return this.#tickets;
  }
}

export default LottoService;
