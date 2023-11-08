import LottoGame from './lotto/LottoGame.js';

class App {
  async play() {
    const lottoGame = new LottoGame();
    await lottoGame.playLottoGame();
  }
}

export default App;