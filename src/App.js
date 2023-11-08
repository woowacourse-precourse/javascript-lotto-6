import View from "./View/View.js";
import Model from "./Model.js";
import Lotto from "./Lotto.js";
import Validate from "./View/Validate.js";

class App {
  constructor() {
    this.view = new View();
    this.model = new Model();
    this.validate = new Validate();
  }

  countBuyLottos(cost) {
    if (cost % 1000) {
      this.view.print(`잔돈 ${cost % 1000}원은 반환됩니다!`);
      return parseInt(cost / 1000);
    }
    return cost / 1000;
  }

  async processInputCost() {
    let buyLottoCost = 0;
    while (true) {
      try {
        buyLottoCost = await this.view.inputNumber("구입금액을 입력해 주세요.\n");
        this.validate.isCost(buyLottoCost);
        break;
      }
      catch (error) {
        this.view.print(error.message);
      }
    }
    this.model.setBuyLottoNumber(this.countBuyLottos(buyLottoCost))
  }

  async processInputWinningNumber() {
    let winningNumber = 0;
    while (true) {
      try {
        winningNumber = await this.view.inputWinningNumber("당첨 번호를 입력해 주세요.\n");
        this.validate.isWinningNumber(winningNumber);
        break;
      } catch (error) {
        this.view.print(error.message);
      }
    }
    this.model.setWinningNumber(winningNumber);
  }

  async processInputBonusNumber() {
    let bonusNumber = 0;
    while (true) {
      try {
        bonusNumber = await this.view.inputNumber("보너스 번호를 입력해 주세요.\n");
        this.validate.isBonusNumber(bonusNumber, this.model.getWinningNumber());
        break;
      } catch (error) {
        this.view.print(error.message);
      }
    }
    this.model.setBonusNumber(bonusNumber);
  }

  printLottoCountAndLottoNumber() {
    this.view.print(this.model.getBuyLottoNumber() + "개를 구매했습니다.");
    for (let i = 0; i < this.model.getBuyLottoNumber(); i++) {
      this.view.print(`[${this.model.getLottoDataObject()[i].getNumbers().join(', ')}]`);
    }
  }

  makeLotto(count) {
    for (let i = 0; i < count; i++) {
      const lottoNumbers = this.view.makeLottoNumber();
      const lottoObject = new Lotto(lottoNumbers);
      this.model.setLottoDataObject(lottoObject);
    }
  }



  async play() {
    await this.processInputCost();
    this.makeLotto(this.model.getBuyLottoNumber());
    this.printLottoCountAndLottoNumber();
    await this.processInputWinningNumber();
    await this.processInputBonusNumber();
    this.model.judgeResultGrade();
    this.view.printResult(this.model.getGradeCounts(), 100 + this.model.getEarningRate())
  }
}

export default App;
