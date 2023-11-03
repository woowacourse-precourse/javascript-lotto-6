import Lotto from './Lotto.js';

class Computer {
  #generator;

  constructor(generator) {
    this.#generator = generator;
  }

  generateLotto(price) {
    const quantity = this.calculateQuantity(Number(price));

    const lottoes = Array.from({ length: quantity }, () => {
      return new Lotto(this.#generator());
    });

    return lottoes;
  }

  calculateQuantity(lottoPrice) {
    return lottoPrice / 1000;
  }
}

export default Computer;
