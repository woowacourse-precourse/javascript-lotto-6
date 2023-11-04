import GameController from './LottoGame/GameController';

class App {
  constructor() {
    this.controller = new GameController();
  }
  async play() {
    await this.controller.start();
  }
}

export default App;
