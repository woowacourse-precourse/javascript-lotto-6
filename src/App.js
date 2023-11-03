/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
import LottoPos from './Client/LottoPos.js';

class App {
  constructor() {
    this.LottoPos = new LottoPos();
  }

  async play() {
    await this.LottoPos.handlerPurchaseAmount();
    await this.LottoPos.inputWinningNumber();
  }
}

export default App;
