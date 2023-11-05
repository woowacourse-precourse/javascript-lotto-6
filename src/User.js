class User {
  #lottoPrice;
  #lottos;

  constructor(lottoPrice) {
    this.#lottoPrice = lottoPrice;
    this.#lottos = [];
  }

  getLottos(lottoSeller) {
    this.#lottos = lottoSeller.sellLotto(this.#lottoPrice);
    return [...this.#lottos];
  }

  checkResult(combinationMachine) {
    const lottos = this.#lottos;
    const lottoResult = combinationMachine.compareLottoNumbers(lottos);

    return [lottoResult, this.#calculateRateOfReturn(lottoResult).toFixed(1)];
  }

  #calculateRateOfReturn(lottoResult) {
    const filtered = Object.entries(lottoResult).filter(([_, matchedLength]) => matchedLength > 0);
    if (filtered.length === 0) return 0;

    const sum = filtered.reduce((total, [prize, matchedLength]) => {
      return (total += Number(prize) * matchedLength);
    }, 0);

    return (sum / this.#lottoPrice) * 100;
  }
}

export default User;
