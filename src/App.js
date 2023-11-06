import View from "./View.js";
import Model from "./Model.js";

class App {
  constructor() {
    this.view = new View();
    this.model = new Model();
  }
  validateNumber(inputNumber) {
    if (isNaN(inputNumber)) {
      throw new Error("[ERROR] : 숫자로만 입력해주세요!");
    }
  }
  countBuyLottos(cost) {
    if (cost % 1000) {
      this.view.print(`잔돈 ${cost % 1000}원은 반환됩니다!`);
      return parseInt(cost / 1000);
    }
    return cost / 1000;
  }

  async processInputCost() {
    const buyLottoCost = await this.view.inputNumber("구입금액을 입력해 주세요.\n");
    this.validateNumber(buyLottoCost);
    this.model.setBuyLottoNumber(this.countBuyLottos(buyLottoCost))
  }

  async processInputWinningNumber() {
    const winningNumber = await this.view.inputWinningNumber("당첨 번호를 입력해 주세요.\n");
    this.model.setWinningNumber(winningNumber);
  }

  printLottoCountAndLottoNumber() {
    this.view.print(this.model.getBuyLottoNumber() + "개를 구매했습니다.");
  }

  async play() {
    try {
      await this.processInputCost();
      this.printLottoCountAndLottoNumber();
      await this.processInputWinningNumber();
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default App;
