class LottoSeller {
  lottoMacine;

  constructor(lottoMacine) {
    this.lottoMacine = lottoMacine;
  }

  sellLotto(lottoPrice) {
    const lottos = this.lottoMacine.generateLotto(lottoPrice);
    return lottos;
  }
}

export default LottoSeller;
