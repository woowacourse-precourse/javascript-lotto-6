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
    const result = combinationMachine.compareLottoNumbers(lottos);

    return result;
  }
}

export default User;
