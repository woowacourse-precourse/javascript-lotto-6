import LottoGameFactory from './factories/LottoGameFactory.js';
import RandomNumberStrategy from './model/strategies/RandomNumberStrategy.js';

class App {
  constructor(strategy) {
    this.strategy = strategy || new RandomNumberStrategy();
    this.factory = new LottoGameFactory();
  }

  async play() {
    const lottoGame = this.factory.createLottoGame();
    await lottoGame.start();
  }
}

export default App;
