import LottoController from '../controller/LottoController.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import Validator from '../utils/Validator.js';

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
    // this.controller.printLotto(this.input.price);
    this.output.printLotto(this.input.price, this.lottoArr);
    // this.controller.generateAndStoreLotto();

    await this.input.getWinNum();
    await this.input.getBonusNum();
    Validator.validateBonusNum(this.input.bonusNum, this.input.winNum);
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
