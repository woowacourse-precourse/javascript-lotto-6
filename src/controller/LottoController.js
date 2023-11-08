import InputView from "../view/InputView";
import OutputView from "../view/OutputView";
import Validator from "../utils/Validator";
import Lotto from "../model/Lotto";

class LottoController {
  #inputView;
  #outputView;
  #validator;
  #lotto;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#validator = new Validator();
    this.#lotto = new Lotto();
  }

  async gameStart() {
    await this.#purchaseLotto();
  }

  async #purchaseLotto() {
    const purchaseAmount = await this.#inputView.readPurchaseAmount();
    this.#validator.validatePurchaseAmount(purchaseAmount);
    await this.#generateLotto(purchaseAmount);
  }

  async #generateLotto(purchaseAmount) {
    this.#outputView.printPurchaseAmount(purchaseAmount / 1000);
    const result = this.#lotto.lottoResults(purchaseAmount / 1000);
    this.#outputView.printLottoResult(result);
    await this.#receiveLottoNumbers();
  }

  async #receiveLottoNumbers() {
    const lottoNumbers = this.#inputView.readLottoNumbers();
  }
}

export default LottoController;
