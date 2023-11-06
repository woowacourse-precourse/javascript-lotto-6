import Lotto from "./Lotto.js";

class App {
  async play() {
    const lottoGame = new Lotto([1, 2, 3, 4, 5, 6]);
    await lottoGame.startGame();
  }
}

export default App;
