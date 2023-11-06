import LottoMain from "./modules/LottoMain.js";

class App {
  async play() {
    const lotto1 = new LottoMain();
    await lotto1.start();
  }
}

export default App;
