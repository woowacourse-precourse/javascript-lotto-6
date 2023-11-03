class User {
  #seller;

  constructor(seller) {
    this.#seller = seller;
  }

  purchaceLottos(lottoPrice) {
    return this.#seller.sellLotto(lottoPrice);
  }
}

export default User;
