import GameManager from "./controllers/GameManager.js";

class App {
  // eslint-disable-next-line class-methods-use-this
  async play() {
    await GameManager.playLottoGame();
  }
}

export default App;
