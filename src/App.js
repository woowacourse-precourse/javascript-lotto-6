import LottoGame from './LottoGame.js';

class App {
  async play() {
    const lottoGame = new LottoGame();
    lottoGame.play();
  }
}

export default App;
