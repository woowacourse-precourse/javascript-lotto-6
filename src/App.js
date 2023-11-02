import LottoController from "./controller/LottoController";
import InputView from "./views/InputView";
import OutputView from "./views/OutputView";
import LottoModel from "./model/LottoModel";

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
