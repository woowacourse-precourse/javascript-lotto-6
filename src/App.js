import Controller from './controller/Controller.js';

class App {
  #controller

  constructor() {
    this.#controller = new Controller();
  }

  async play() {
    await this.#controller.run();
  }
}

export default App;
