import LottoController from './controllers/LottoController.js';

class App {
  async play() {
    const lottoGame = new LottoController();
    await lottoGame.start();
  }
}

export default App;
