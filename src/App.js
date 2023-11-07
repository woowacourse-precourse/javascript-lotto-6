import LottoGame from './components/LottoGame.js';

export default class App {
  constructor() {
    this.lottoGame = new LottoGame();
  }

  async play() {
    await this.lottoGame.start();
  }
}
