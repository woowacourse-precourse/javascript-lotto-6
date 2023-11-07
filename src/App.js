import LottoGame from "./model/LottoGame.js";

class App {
  async play() {
    const lottoGame = new LottoGame();
    await lottoGame.start();
  }
}

export default App;
