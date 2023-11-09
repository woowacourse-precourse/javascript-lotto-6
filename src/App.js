import {LottoController} from "./controller/LottoController.js";
import {InputView} from "./view/InputView.js";
import {InputValidator} from "./view/InputValidator.js";
import {InputConverter} from "./view/InputConverter.js";
import {LottoGenerator} from "./domain/LottoGenerator.js";
import {OutputView} from "./view/OutputView.js";
import {LottoSeller} from "./domain/LottoSeller.js";

class App {
  async play() {
    const lottoGenerator = LottoGenerator.random();
    const inputValidator = new InputValidator();
    const inputConverter = new InputConverter();
    const inputView = new InputView(inputValidator, inputConverter);
    const outputView = new OutputView();
    const lottoSeller = new LottoSeller(lottoGenerator);
    const lottoController = new LottoController(
      inputView,
      outputView,
      lottoSeller
    );

    await lottoController.start();
  }
}

export default App;
