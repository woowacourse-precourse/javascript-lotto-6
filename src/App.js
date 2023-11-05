import LottoGame from "./LottoGame";

class App {
  async play() {
    const lottoGame = new LottoGame();
    await lottoGame.initGame();
  }
}

export default App;
