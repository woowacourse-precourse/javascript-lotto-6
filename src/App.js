import InputView from './view/InputView.js';

class App {
  #inputView;

  constructor() {
    this.#inputView = new InputView();
  }

  async play() {
    const lottoPrice = await this.#inputView.getLottoPrice();
    console.log(lottoPrice);
  }
}

export default App;
