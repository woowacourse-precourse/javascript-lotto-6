class User {
  #seller;
  #lottoPrice;
  #lottos;

  constructor(seller, lottoPrice) {
    this.#seller = seller;
    this.#lottoPrice = lottoPrice;
    this.#lottos = [];
  }

  purchaceLottos() {
    this.#lottos = this.#seller.sellLotto(this.#lottoPrice);
    return this.#lottos;
  }

  checkResult(combinationMachine) {
    const { lottos } = this.#lottos;
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
