import Controller from './Controller/Controller.js';

class App {
  constructor() {
    this.controller = new Controller();
    // this.play();
  }

  async play() {
    await this.controller.buyLotto();
    await this.controller.inputWinningNum();
  }
}

const app = new App();
await app.play();

export default App;
