/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
import LottoPos from './Client/LottoPos.js';

class App {
  constructor() {
    this.LottoPos = new LottoPos();
  }

  async play() {
    await this.LottoPos.inputPurchaseAmount();
  }
}

export default App;
