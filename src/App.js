import LottoGameController from './Controller/Controller.js';

class App {
  async play() {
    const lottoGame = new LottoGameController();
    await lottoGame.start();
  }
}

export default App;