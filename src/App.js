import LottoController from '../controller/LottoController.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class App {
  constructor() {
    this.controller = new LottoController();
    this.input = new InputView();
    this.output = new OutputView();

    this.lottoArr = [];
    this.winCountArr = [];
  }

  async play() {
    await this.input.getPrice();
    this.output.printLotto(this.input.price, this.lottoArr);
    await this.input.getWinNum();
    await this.input.getBonusNum();

    this.getWinStatistics();
  }

  getWinStatistics() {
    this.controller.checkWin(
      this.input.price,
      this.input.winNum,
      this.input.bonusNum,
      this.lottoArr,
    );
    this.controller.getWinCountArr(this.winCountArr);
    this.output.printWinCount(this.winCountArr);
    const returnRate = this.controller.calculateReturnRate(
      this.winCountArr,
      this.input.price,
    );
    this.output.printReturnRate(returnRate);
  }
}

export default App;
