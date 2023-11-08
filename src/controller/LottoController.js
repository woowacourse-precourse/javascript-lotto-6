import InputView from "../view/InputView";
import OutputView from "../view/OutputView";
import Validator from "../utils/Validator";
import Lotto from "../model/Lotto";
import LottoDataProcessor from "../model/LottoDataProcessor";

class LottoController {
  #inputView;
  #outputView;
  #lottoDataProcessor;
  #lotto;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#lottoDataProcessor = new LottoDataProcessor();
  }

  async gameStart() {
    await this.#purchaseLotto();
  }

  async #purchaseLotto() {
    const purchaseAmount = await this.#inputView.readPurchaseAmount();
    Validator.validatePurchaseAmount(purchaseAmount);
    await this.#generateLotto(purchaseAmount);
  }

  async #generateLotto(purchaseAmount) {
    this.#outputView.printPurchaseAmount(purchaseAmount / 1000);
    const result = this.#lottoDataProcessor.lottoResults(purchaseAmount / 1000);
    this.#outputView.printLottoResult(result);
    await this.#receiveLottoNumbers();
  }

  async #receiveLottoNumbers() {
    const lottoNumbers = await this.#inputView.readLottoNumbers();
    console.log(lottoNumbers);
    this.#lotto = new Lotto(
      lottoNumbers.split(",").map((number) => parseInt(number, 10))
    );
  }
}

export default LottoController;
