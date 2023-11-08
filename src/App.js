import LottoGame from "./LottoGame.js";

class App {
  async play() {
    const lottoGame = new LottoGame();
    await lottoGame.getUserInputMoney();
    await lottoGame.getWinningNumber();
  }
}

export default App;
