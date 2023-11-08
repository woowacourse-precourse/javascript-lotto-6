import InputView from "../view/InputView";
import OutputView from "../view/OutputView";
import Validator from "../utils/Validator";
import Lotto from "../model/Lotto";
import LottoDataProcessor from "../model/LottoDataProcessor";
import Bonus from "../model/Bonus";
import ResultProcessor from "../model/ResultProcessor";
import ProfitProcessor from "../model/ProfitProcessor";

class LottoController {
  #inputView;
  #outputView;
  #lottoDataProcessor;
  #lotto;
  #lottoResult;
  #resultProcessor;
  #bonus;
  #profitProcessor;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }

  async gameStart() {
    await this.#purchaseLotto();
  }

  async #purchaseLotto() {
    const purchaseAmount = await this.#inputView.readPurchaseAmount();
    this.#lottoDataProcessor = new LottoDataProcessor(purchaseAmount);
    await this.#generateLotto();
  }

  async #generateLotto() {
    this.#lottoResult = this.#lottoDataProcessor.getLottoResults();
    this.#outputView.printPurchaseAmount(this.#lottoResult.length);
    this.#outputView.printLottoResult(this.#lottoResult);
    await this.#receiveLottoNumbers();
  }

  async #receiveLottoNumbers() {
    const lottoNumbers = await this.#inputView.readLottoNumbers();
    this.#lotto = new Lotto(
      lottoNumbers.split(",").map((number) => parseInt(number, 10))
    );
    const bonusNumber = await this.#inputView.readBonusNumber();
    this.#bonus = new Bonus(bonusNumber, this.#lotto.getLottoNumber());
    await this.#generateWinningResult();
  }

  async #generateWinningResult() {
    await this.#outputView.printWinningMessage();
    this.#resultProcessor = new ResultProcessor(
      this.#lotto.getLottoNumber(),
      this.#bonus.getBonusNumber(),
      this.#lottoDataProcessor.getLottoResults()
    );
    const result = this.#resultProcessor.getResult();
    await this.#outputView.printWinningResult(result);
    this.#profitProcessor = new ProfitProcessor(
      result,
      this.#lottoDataProcessor.getPurchaseAmount()
    );
    const profit = this.#profitProcessor.getProfit();
    await this.#outputView.printWinningProfit(profit);
  }
}

export default LottoController;
