import InputView from './view/InputView.js';
import Validation from './util/Validation.js';

class App {
  #inputView;

  constructor() {
    this.#inputView = new InputView();
  }

  async play() {
    const lottoPrice = await this.#inputView.getLottoPrice();
    Validation.inputLottoPrice(lottoPrice);
  }
}

export default App;
