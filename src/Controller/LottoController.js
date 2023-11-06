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
    this.start();
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


  async start() {}
}

export default LottoController;