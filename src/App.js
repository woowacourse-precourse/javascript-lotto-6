import LottoManager from "./ui/LottoManager.js";

class App {
  async play() {
    const lottoManager = new LottoManager();

    await lottoManager.startLottoSimulator();
  }
}

export default App;
