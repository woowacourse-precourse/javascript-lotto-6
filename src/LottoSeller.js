class LottoSeller {
  #computer;

  constructor(computer) {
    this.#computer = computer;
  }

  sellLotto(lottoPrice) {
    const tickets = this.#computer.generateLotto(lottoPrice);

    return tickets;
  }
}

export default LottoSeller;
