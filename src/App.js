import LottoGameFactory from './factories/LottoGameFactory.js';

class App {
  constructor() {
    this.factory = new LottoGameFactory();
  }

  async play() {
    const lottoGame = this.factory.createLottoGame();
    await lottoGame.start();
  }
}

export default App;
