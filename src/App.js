import LottoController from "./controller/LottoController";
import OutputView from "./views/OutputView";
import InputView from "./views/InputView";

class App {
  async play() {
    const inputView = new InputView();
    const outputView = new OutputView();
    const lottoController = new LottoController(inputView, outputView);
    await lottoController.play();
  }
}

export default App;
