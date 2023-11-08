import Statics from "../static/Statics.js";


class Model {
  #lottos;
  #purchaseBudget;

  constructor(purchaseBudget) {
    this.#purchaseBudget = purchaseBudget;
    this.#lottos = this.purchaseLottos(purchaseBudget)
  }
  
  purchaseLottos(purchaseBudget) {
    const MAXpurchasableAmount = Number.parseInt(purchaseBudget / Statics.lotto.price);
  }
  
}
export default Model;