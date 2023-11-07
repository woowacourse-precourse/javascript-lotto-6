import Helper from './_shared/helper.js';

class Purchaser {
  #lottos;

  get lottos() {
    return this.#lottos;
  }

  constructor() {
    this.#lottos = [];
  }

  getLotto() {
    const lotto = Helper.generateLotto();
    this.#lottos.push(lotto);

    return lotto;
  }
}

export default Purchaser;
