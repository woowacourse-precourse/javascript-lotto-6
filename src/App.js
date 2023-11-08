import LottoPlay from "./Controller/LottoPlay.js";

class App {
  async play() {
    const lottoPlay = new LottoPlay();

    await lottoPlay.buyLottos();
    await lottoPlay.createWinningLotto();
    lottoPlay.createWinningResult();
  }
}

export default App;