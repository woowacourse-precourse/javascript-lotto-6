import UserInput from './view/UserInput.js';
import Purchase from './model/Purchase.js';
import Calculate from './model/Calculate.js';
import Result from './view/Result.js';
import LottoController from './controller/LottoController.js';

class App {
  constructor() {
    this.lottoController = new LottoController();
  }

  async play() {
    await this.lottoController.lottoGamePlay();
  }
}

export default App;
