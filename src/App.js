import Request from './request.js';
import calculate from './calculate.js';
import lottoMachine from './lottoMachine.js';

class App {
  #money;

  #lottoQuantity;

  #lottos;

  constructor() {
    this.#money = 0;
    this.#lottoQuantity = 0;
    this.#lottos = [];
  }

  async play() {
    this.#money = await Request.money();
    this.#lottoQuantity = calculate.countFrom(this.#money);
    this.#lottos = lottoMachine.make(this.#lottoQuantity);
  }
}

export default App;
