import LottoGame from './LottoGame.js';

class App {
  async play() {
    const game = new LottoGame();
    await game.playGame();
  }
}

export default App;
