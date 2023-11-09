import Controller from "./controller/Controller.js";

class App {
  #contorller;

  constructor() {
    this.#contorller = new Controller();
  }

  async play() {
    await this.#contorller.start();
  }
}

export default App;
