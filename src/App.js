import LottoGameController from './controller/LottoGameController.js';
import RandomNumberStrategy from './model/strategies/RandomNumberStrategy.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  async play() {
    const randomNumberGeneration = new RandomNumberStrategy();
    const inputView = new InputView();
    const outputView = new OutputView();
    const lottoGameController = new LottoGameController({
      randomNumberGeneration,
      inputView,
      outputView,
    });
    try {
      await lottoGameController.start();
    } catch (errorMessage) {
      throw new Error(errorMessage);
    }
  }
}

export default App;
