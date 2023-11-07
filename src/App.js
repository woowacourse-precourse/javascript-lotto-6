import GameManager from "./controller/GameManager";

class App {
  // eslint-disable-next-line class-methods-use-this
  async play() {
    const gameManager = new GameManager();
    await gameManager.playLottoGame();
  }
}

export default App;
