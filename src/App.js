import LottoPlay from "./LottoPlay.js";

class App {
  async play() {
    const lottoGame = new LottoPlay();
    await lottoGame.startGame();
  }
}

export default App;
