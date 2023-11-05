import LottoController from "./controllers/LottoController";

class App {
  async play() {
    const lottoStart = new LottoController();
    await lottoStart.start();
  }
}

export default App;
