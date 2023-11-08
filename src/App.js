import Game from './Game';

class App {
  async play() {
    const game = new Game();
    await game.playGame();
  }
}

export default App;
