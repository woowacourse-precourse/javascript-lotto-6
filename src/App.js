import View from "./View/View.js";
import Model from "./Model.js";
import Lotto from "./Lotto.js";

const MAX_LOTTO_NUMBER_LENGTH = 6;

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

  validateDuplicationNumber(Numbers) {
    const seen = {};

    for (const item of Numbers) {
      if (seen[item]) {
        throw new Error("[ERROR] : 중복된 수 없이 입력해주세요");
      }
      seen[item] = true;
    }
  }

  validateWinningNumber(inputWinningNumber) {
    for (let i = 0; i < MAX_LOTTO_NUMBER_LENGTH; i++) {
      if ((inputWinningNumber[i] >= 45) || (inputWinningNumber[i] < 1)) {
        throw new Error("[ERROR] : 당첨번호는 1~45 사이 수여야 합니다.");
      }
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
    this.validateWinningNumber(winningNumber);
    this.validateDuplicationNumber(winningNumber);
    this.model.setWinningNumber(winningNumber);
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
    try {
      await this.processInputCost();
      this.makeLotto(this.model.getBuyLottoNumber());
      this.printLottoCountAndLottoNumber();
      await this.processInputWinningNumber();
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default App;
