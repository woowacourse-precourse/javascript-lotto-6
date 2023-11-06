import LottoGame from "./Controller/LottoGame.js";

class App {
  async play() {
    const lottoGame = new LottoGame;
    await lottoGame.start();
  }
}

export default App;
