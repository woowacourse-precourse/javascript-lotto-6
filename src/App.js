import LottoGameController from './controller/LottoGameController.js';
import RandomNumberStrategy from './model/strategies/RandomNumberStrategy.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  async play() {
    const inputView = new InputView();
    const outputView = new OutputView();
    const randomNumberGeneration = new RandomNumberStrategy();
    const lottoGameController = new LottoGameController({
      randomNumberGeneration,
      inputView,
      outputView,
    });
    await lottoGameController.start();
  }
}

export default App;
