import LottoController from "./controller/LottoController";
import InputView from "./views/InputView";
import OutputView from "./views/OutputView";

class App {
  async play() {
    const inputView = new InputView();
    const outputView = new OutputView();

    const lottoController = new LottoController(inputView, outputView);
    await lottoController.play();
  }
}

export default App;
