import LottoPos from './Client/LottoPos.js';

class App {
  constructor() {
    this.LottoPos = new LottoPos();
  }

  async play() {
    await this.LottoPos.handlerPurchaseAmount();
    await this.LottoPos.inputWinningNumber();
    await this.LottoPos.inputBonusNumber();
    this.LottoPos.compareLottoNumber();
  }
}

export default App;
