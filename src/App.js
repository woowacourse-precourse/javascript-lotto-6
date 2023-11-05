import Controller from './Controller/Controller.js';

class App {
  constructor() {
    this.controller = new Controller();
  }

  async play() {
    await this.controller.buyLotto();
    await this.controller.playLotto();
    this.controller.result();
  }
}

export default App;
