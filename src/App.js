import LottoGame from './LottoGame';
const lottoGame = new LottoGame();

class App {
  async play() {
    await lottoGame.gameStart();
  }
}

export default App;
