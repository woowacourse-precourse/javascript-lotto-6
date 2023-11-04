import Game from './Game.js';

class App {
  async play() {
    const lottoGame = new Game();
    await lottoGame.start();
  }
}

export default App;
