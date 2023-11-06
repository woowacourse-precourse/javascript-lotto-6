import Controller from "./Controller.js";

class App {
  #contorller;

  constructor() {
    this.#contorller = new Controller();
  }

  async play() {
    await this.#contorller.start();
  }
}

const app = new App();
app.play();

export default App;
