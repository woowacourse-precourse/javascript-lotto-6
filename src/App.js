import LottoGame from "./LottoGame.js";

class App {
  async play() {
    try {
      const game = new LottoGame();
      await game.start();
    } catch (error) {
      return this.play();
    }
  }
}

export default App;
