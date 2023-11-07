import GameController from './controllers/GameController.js';

class App {
  constructor() {
    this.gameController = new GameController();
  }

  async play() {
    await this.gameController.lottoPublishCount();
    this.gameController.publishLotto();
    await this.gameController.winningLotto();
    await this.gameController.bonusNumber();
    this.gameController.winningStatistics();
  }
}

export default App;
