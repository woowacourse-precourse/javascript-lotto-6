class LottoSeller {
  #computer;

  constructor(computer) {
    this.#computer = computer;
  }

  sellLotto(lottoPrice) {
    const lottos = this.#computer.generateLotto(lottoPrice);
    return lottos;
  }
}

export default LottoSeller;
