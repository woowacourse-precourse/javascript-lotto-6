/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
import InputView from './Client/InputView.js';

class App {
  constructor() {
    this.inputView = new InputView();
  }

  async play() {
    await this.inputView.inputPurchaseAmount();
  }
}

export default App;
