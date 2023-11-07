import LottoMain from "./modules/LottoMain.js";

class App {
  async play() {
    const lottoMain = new LottoMain();
    await lottoMain.start();
  }
}

export default App;
