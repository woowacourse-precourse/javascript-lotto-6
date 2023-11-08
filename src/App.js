import LottoController from "./controller/LottoController.js";
import LottoModel from "./model/LottoModel.js";
import InputView from "./view/InputView.js";
import OutputView from "./view/OutputView.js";

class App {
  async play() {
    const model = new LottoModel();
    const inputView = new InputView();
    const outputView = new OutputView();
    const controller = new LottoController({ model, inputView, outputView });
    await controller.start();
  }
}

export default App;
