export default class LottoPlayer {
  #lottoTickets;

  constructor() {
    this.#lottoTickets = [];
  }

  setLottoTickets(lotto) {
    this.#lottoTickets.push(lotto);
  }

  getLottoTickets() {
    return this.#lottoTickets;
  }
}
