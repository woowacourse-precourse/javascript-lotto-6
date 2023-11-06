import LottoController from './controller/LottoController.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';

class App {
  async play() {
    const inputView = InputView;
    const outputView = OutputView;
    const lottoController = new LottoController(inputView, outputView);
    await lottoController.start();
  }
}

export default App;
