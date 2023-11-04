import Lotto from './Lotto.js';

class Computer {
  #generator;

  constructor(generator) {
    this.#generator = generator;
  }

  generateLotto(lottoPrice) {
    const quantity = this.#calculateQuantity(Number(lottoPrice));
    const lottos = Array.from({ length: quantity }, () => {
      return new Lotto(this.#generator()).getAscendingNumber();
    });

    return { quantity, lottos };
  }

  #calculateQuantity(lottoPrice) {
    return lottoPrice / 1000;
  }
}

export default Computer;
