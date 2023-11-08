import { MissionUtils } from '@woowacourse/mission-utils';
import inputView from './InputView.js';
import validation from './validation.js';
import Lotto from './Lotto.js';

class App {
  async play() {
    this.gameStart();
  }

  async gameStart() {
    const purchasePrice = await inputView.purchaseInput();
    validation.checkPurchasePrice(purchasePrice);
  }
}

export default App;
