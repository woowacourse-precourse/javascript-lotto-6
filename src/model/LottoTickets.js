class LottoTickets {
  #lottoTickets = [];

  addLotto(lottoNumbers) {
    this.#lottoTickets.push(lottoNumbers);
  }

  getLottoTickets() {
    return [...this.#lottoTickets];
  }
}

export default LottoTickets;
