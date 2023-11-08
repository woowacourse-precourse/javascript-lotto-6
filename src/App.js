import LottoController from '../src/controller/LottoController.js';

class App {
  async play() {
    const game = new LottoController();
    await game.start();
  }
}

export default App;
