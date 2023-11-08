import LottoGame from "./LottoGame.js";

class App {
  async play() {
    const lottoGame = new LottoGame();

    lottoGame.start();
  }
}

export default App;