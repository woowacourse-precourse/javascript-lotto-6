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
    const totalProfitPrice = this.#calculateTotalProfitPrice(lottoResult);
    if (totalProfitPrice === 0) return 0;

    return (totalProfitPrice / Number(this.#lottoPrice)) * 100;
  }

  #calculateTotalProfitPrice(lottoResult) {
    return lottoResult
      .filter(({ matchedNumber }) => matchedNumber > 0)
      .reduce((total, { prize, matchedNumber }) => total + prize * matchedNumber, 0);
  }
}

export default User;
