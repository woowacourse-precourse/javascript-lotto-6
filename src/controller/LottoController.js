import InputView from "../view/InputView";
import OutputView from "../view/OutputView";
import Validator from "../utils/Validator";
import LottoDataProcessor from "../model/LottoDataProcessor";

class LottoController {
  #inputView;
  #outputView;
  #validator;
  #lottoDataProcessor;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#validator = new Validator();
    this.#lottoDataProcessor = new LottoDataProcessor();
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
    const result = this.#lottoDataProcessor.lottoResults(purchaseAmount / 1000);
    this.#outputView.printLottoResult(result);
    await this.#receiveLottoNumbers();
  }

  async #receiveLottoNumbers() {
    const lottoNumbers = await this.#inputView.readLottoNumbers();
    this.#validator.validateLottoNumbers(lottoNumbers);
  }
}

export default LottoController;
