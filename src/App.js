import StartGame from './StartGame.js';

class App {
  constructor() {
    this.game = new StartGame();
  }

  async play() {
    await this.game.runGame();
  }
}

export default App;
