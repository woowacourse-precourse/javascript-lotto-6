import LottoController from "./controller/lottoController";

class App {
  async play() {
    await new LottoController().play();
  }
}

export default App;
