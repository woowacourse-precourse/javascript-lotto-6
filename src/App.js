import LottoGameController from './controller/LottoGameController';

class App {
  async play() {
    const lottoGame = new LottoGameController();
    await lottoGame.start();
    return this;
  }
}

export default App;
