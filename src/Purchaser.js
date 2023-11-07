import Helper from './_shared/helper.js';

class Purchaser {
  #lottos;

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
