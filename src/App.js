import LottoGame from "./LottoGame.js";

class App {
  async play() {
    const lottoGame = new LottoGame();
    try {
      await lottoGame.getUserInputMoney();
      await lottoGame.getWinningNumber();
      lottoGame.checkLottoNumbers();
    } catch (error) {
      return;
    }
  }
}

export default App;
