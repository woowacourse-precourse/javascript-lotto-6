import StartGame from './startGame.js';

class App {
  constructor() {
    this.game = new StartGame();
  }

  async play() {
    await this.game.runGame();
  }
}

export default App;
