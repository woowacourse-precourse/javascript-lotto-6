import InputView from "../../View/InputView.js";
import PurchaseCost from "../PurchaseCost.js";
import Lotto from "../Lotto.js";
import BonusLotto from "../BonusLotto.js";
import OutputView from "../../View/OutputView.js";

class LottoController {
  #lottoCost;
  #pickLotto;
  #bonusLotto;
  #matchResult;
  constructor() {
    this.#initialize();
  }
  
  async #initialize() {
    await this.#getDefaultInput();
    this.printLottoNumbersMatchCount();
  }

  async printLottoNumbersMatchCount() {
    await this.getLottoMatchResultyData();
    console.log(this.#matchResult);

  }

  async #getDefaultInput() {
    await this.getPurchaseCost();
    this.#pickLotto = new Lotto(await InputView.inputLotto());
    this.#bonusLotto = new BonusLotto(await InputView.inputBonusLotto(), this.#pickLotto.getLottoNumbers());
  }

  async getPurchaseCost() {
    this.#lottoCost = new PurchaseCost(await InputView.inputPurchaseCost());
    OutputView.outputRandomLottoNumbersList(await this.#lottoCost.getRandomLottoNumbersList());
  }

  async getLottoMatchResult() {
    const matchCount = await this.#pickLotto.getLottoMathCount(await this.#lottoCost.getRandomLottoNumbersList());
    const mathBonusCount = await this.#bonusLotto.getLottoMatchBonusCount(await this.#lottoCost.getRandomLottoNumbersList());
    return matchCount.map((count, index) => [count, mathBonusCount[index]]);
  }
  
  async getLottoMatchResultyData() {
    this.#matchResult = {};
    (await this.getLottoMatchResult()).forEach(subData => {
      const [count, bonusCount] = subData;
      if (this.#matchResult[count] === undefined) {
        this.#matchResult[count] = [0, 0];
      };
      this.#matchResult[count][0] += 1
      if (bonusCount) this.#matchResult[count][1] += 1;
    });
  }
}

export default LottoController;