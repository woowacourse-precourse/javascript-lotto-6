class Computer {
  #generator;

  constructor(generator) {
    this.#generator = generator;
  }

  calculateQuantity(lottoPrice) {
    return lottoPrice / 1000;
  }
}

export default Computer;
