class Lottos {
  #purchase;

  #lottos;

  constructor(purchase) {
    this.#lottos = [];
    this.#purchase = purchase;
  }

  setPurchase(purchase) {
    this.#purchase = purchase;
  }
}

export default Lottos;
