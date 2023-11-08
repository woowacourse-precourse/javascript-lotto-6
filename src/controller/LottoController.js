import InputView from "../views/InputView.js"
import OutputView from "../views/OutputView.js";
import GenerateLottoNumbers from "../models/GenerateLottoNumbers.js";
import LottoResultCalculator from "../models/LottoResultCalculator.js";
import ProfitCalculator from "../models/ProfitCalculator.js";

class LottoController {
  #purchasePrice;
  #lottos;
  #winningNumbers;
  #bonusNumber;
  #result;
  #roi;
  #lottoNumberGenerator;

  constructor() {
    this.#lottoNumberGenerator = new GenerateLottoNumbers(); 
  }

  async playGame() {
    await this.#inputPurchasePrice();
    this.#generateLottos();
    await this.#inputWinningNumbers();
    await this.#inputBonusNumber();
    this.#calculateResult();
    this.#displayResult();
  }

  async #inputPurchasePrice() {
    OutputView.printInsertMoneyMessage();
    this.#purchasePrice = await InputView.getPurchasePrice();
  }

  #generateLottos() {
    const lottoCount = parseInt(this.#purchasePrice / 1000);
    OutputView.printLottoCount(lottoCount);
    this.#lottos = this.#lottoNumberGenerator.getLottos(lottoCount);
    OutputView.printLottos(this.#lottos);
  }

  async #inputWinningNumbers() {
    OutputView.printInsertWinningNumbersMessage();
    this.#winningNumbers = await InputView.getWinningNumbers();
  }

  async #inputBonusNumber() {
    OutputView.printInsertBonusNumberMessage();
    this.#bonusNumber = await InputView.getBonusNumber(this.#winningNumbers);
  }

  #calculateResult() {
    const game = new LottoResultCalculator(this.#lottos);
    this.#result = game.getResult(this.#winningNumbers, this.#bonusNumber);
    const totalPrize = ProfitCalculator.calculateTotalPrize(this.#result);
    this.#roi = ProfitCalculator.calculateROI(totalPrize, this.#purchasePrice);
  }

  #displayResult() {
    OutputView.printResult(this.#roi, this.#result);
  }
}

export default LottoController;
