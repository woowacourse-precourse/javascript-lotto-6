import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class Controller {
  #newGame;

  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor() {}

  async run() {
    await InputView.askPurchaseAmount();
    OutputView.printPurchaseNumber(1, [[1, 2, 3, 4, 5, 6]]);
    await InputView.askWinningNumber();
    await InputView.askBonusNumber();
    OutputView.printWinningLog([1, 2, 3, 4, 5]);
    OutputView.printTotalReturn(1000);
  }
}

export default Controller;
