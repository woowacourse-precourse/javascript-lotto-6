import Game from './Game.js';

class App {
  async play() {
    await new Game().purchase();
  }
}

export default App;
