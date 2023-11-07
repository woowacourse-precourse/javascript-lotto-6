class LottoTicket {
  #lottoTicket;

  constructor() {
    this.#lottoTicket = [];
  }

  addLottoToLottoTicket(lotto) {
    this.#lottoTicket.push(lotto);
  }

  getLottoTicketLength() {
    return this.#lottoTicket.length;
  }

  getLottoTicket() {
    return this.#lottoTicket;
  }
}

export default LottoTicket;
