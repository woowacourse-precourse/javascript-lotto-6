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
    const result = lottoResult
      .filter(({ matchedNumber }) => matchedNumber > 0)
      .reduce((total, { prize, matchedNumber }) => total + prize * matchedNumber, 0);

    if (result === 0) return 0;
    return (result / Number(this.#lottoPrice)) * 100;
  }
}

export default User;
