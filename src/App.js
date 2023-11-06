import Controller from './controller/Controller.js';

class App {
  #controller;

  async play() {
    this.controller = new Controller();
    this.#controller.run();
  }
}

export default App;
