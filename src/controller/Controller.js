import Model from "../model/Model.js";
import View from "../view/View.js";

class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();
  }

  async initHandler() {
    try {
      const priceInput = await this.view.readLine("구입금액을 입력해 주세요.\n");
      this.model.makeLotto(priceInput);
      this.view.printLotto(this.model.getLotties);

      const winLottoNumbersInput = await this.view.readLine("\n당첨 번호를 입력해 주세요.\n");
      const winLottoBonusNumberInput = await this.view.readLine("\n보너스 번호를 입력해 주세요.\n");

      this.startLottoHandler(winLottoNumbersInput, winLottoBonusNumberInput);
    } catch (err) {
      this.view.print(err.message);
    }
  }

  startLottoHandler(winNumInput, winBonusNumInput) {
    this.model.compareWinLotto(winNumInput, winBonusNumInput);
    this.view.printLottoPrize(this.model.getPrizeCategories);
    this.view.printProfitRate(this.model.calculateProfit());
  }
}

const controller = new Controller();
export default controller;
