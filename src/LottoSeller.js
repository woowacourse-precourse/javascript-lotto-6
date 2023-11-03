class LottoSeller {
  #computer;

  constructor(computer) {
    this.#computer = computer;
  }

  sellLotto(lottoPrice) {
    return {
      quantity: this.#computer.calculateQuantity(lottoPrice),
      lottos: this.#computer.generateLotto(lottoPrice),
    };
  }
}

export default LottoSeller;
