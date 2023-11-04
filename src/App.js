import LottoController from '../controller/LottoController.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import Validator from '../utils/Validator.js';

class App {
  constructor() {
    this.controller = new LottoController();
    this.input = new InputView();
    this.output = new OutputView();
  }

  async play() {
    await this.input.getPrice();
    this.controller.printLotto(this.input.price);
    await this.input.getWinNum();
    await this.input.getBonusNum();
    Validator.validateBonusNum(this.input.bonusNum, this.input.winNum);
    this.getWinningDetails();
  }

  getWinningDetails() {
    this.controller.checkWin(
      this.input.price,
      this.input.winNum,
      this.input.bonusNum,
    );
    this.controller.getWinCountArr();
    this.controller.printWinCount();
    this.controller.calculatePrice();
    this.controller.printReturnRate(this.input.price);
  }
}
const app = new App();
app.play();

export default App;
