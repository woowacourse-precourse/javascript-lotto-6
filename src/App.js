import Request from './request.js';

class App {
  #money;

  constructor() {
    this.#money = 0;
  }

  async play() {
    this.#money = await Request.money();
  }
}

export default App;
