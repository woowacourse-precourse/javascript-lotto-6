import Controller from './Controller/Controller.js';

class App {
  constructor() {
    this.controller = new Controller();
    // this.play();
  }

  async play() {
    await this.controller.buyLotto();
    await this.controller.inputWinningNum();
    this.controller.winningStatement();
  }
}

export default App;

const app = new App();
app.play();
