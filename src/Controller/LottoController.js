import InputView from "../../View/InputView.js";
import PurchaseCost from "../PurchaseCost.js";
import Lotto from "../Lotto.js";
import BonusLotto from "../BonusLotto.js";
import OutputView from "../../View/OutputView.js";

class LottoController {
  #lottoCost;
  #pickLotto;
  #bonusLotto;
  constructor() {
    this.#initialize();
  }
  
  async #initialize() {
    await this.#getDefaultInput();
    this.printLottoNumbersMatchCount();
  }

  async printLottoNumbersMatchCount() {
    console.log(await this.getLottoMatchResult());

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
}

export default LottoController;