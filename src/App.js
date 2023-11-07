import { LottoGame, Start } from './Lotto.js';
class App {
  async play() {
    const startGame = new Start();
    await startGame.run();
  }
}

export default App;
