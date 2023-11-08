import { Console } from '@woowacourse/mission-utils';
import LottoController from './controller/LottoController.js';

class App {
  constructor() {
    this.lottoController = new LottoController();
  }

  async play() {
    try {
      await this.lottoController.handleBuyLottos();
      await this.lottoController.handleCreateWinResult();
      await this.lottoController.handleLottoResult();
    } catch (err) {
      Console.print(err.message);
    }
  }
}

const app = new App();
app.play();
export default App;
