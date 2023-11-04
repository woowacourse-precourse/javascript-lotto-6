import Request from './request.js';
import calculate from './calculate.js';

class App {
  #money;

  #lottoQuantity;

  constructor() {
    this.#money = 0;
    this.#lottoQuantity = 0;
  }

  async play() {
    this.#money = await Request.money();
    this.#lottoQuantity = calculate(this.#money);
  }
}

export default App;
