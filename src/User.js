class User {
  #lottoPrice;
  #lottos;

  constructor(lottoPrice, lottos) {
    this.#lottoPrice = lottoPrice;
    this.#lottos = lottos;
  }

  compareResult(compareMachine) {
    const lottoResult = compareMachine.compareLottoNumbers(this.#lottos);
    return [lottoResult, this.#calculateLottoProfitRate(lottoResult)];
  }

  #calculateLottoProfitRate(lottoResult) {
    const filtered = lottoResult.filter(({ matchedNumber }) => matchedNumber > 0);

    if (filtered.length === 0) return 0;

    const totalProfit = filtered.reduce((total, { prize, matchedNumber }) => {
      return (total += prize * matchedNumber);
    }, 0);

    return (totalProfit / this.#lottoPrice) * 100;
  }
}

export default User;
