import LottoController from "./controller/LottoController.js";
import InputView from "./views/InputView.js";
import OutputView from "./views/OutputView.js";
import LottoModel from "./model/LottoModel.js";

class App {
  async play() {
    const inputView = new InputView();
    const outputView = new OutputView();
    const lottoModel = new LottoModel();
    const lottoController = new LottoController(
      inputView,
      outputView,
      lottoModel
    );
    await lottoController.play();
  }
}

export default App;
