import InputHandler from './InputHandler.js';
import LottoGenerator from './LottoGenerator.js';

class App {
  #inputHandler;

  constructor() {
    this.#inputHandler = new InputHandler();
  }

  async play() {
    const userAmount = await this.#inputHandler.inputAmount();
    const lottoGenerator = new LottoGenerator(userAmount);
  }
}

export default App;
