import LottoController from "./controller/LottoController";
import OutputView from "./views/OutputView";

class App {
  async play() {
    const outputView = new OutputView();
    const lottoController = new LottoController(outputView);
    await lottoController.play();
  }
}

export default App;
