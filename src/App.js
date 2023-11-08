import Controller from "./controller/controller.js";

class App {

  constructor() {
    this.controller = new Controller();
  };

  async play() {
    await this.controller.init();
  }
}

export default App;
