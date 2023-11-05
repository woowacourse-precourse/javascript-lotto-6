import LottoGameController from './controller/LottoGameController.js';

class App {
  async play() {
    this.game = new LottoGameController();
    await this.game.play();
  }
}

export default App;
