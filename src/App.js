import { Start } from './start.js';

class App {
  async play() {
    const startGame = new Start();
    await startGame.run();
  }
}

export default App;
