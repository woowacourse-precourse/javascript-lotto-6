import OutputView from '../view/OutputView.js';
import InputView from '../view/InputView.js';
import LottosGenerator from '../service/LottosGenerator.js';
import LottosResults from '../service/LottosResults.js';
import LottosReturns from '../service/LottosReturns.js';

class LottoService {
  #input;
  #output;
  #price;
  #lottos;

  constructor() {
    this.#input = new InputView();
    this.#output = new OutputView();
  }

  async purchaseLotto() {
    const price = await this.#input.getLottoPurchasePrice();
    const lottogenerator = new LottosGenerator(price);
    const lottos = lottogenerator.getLottos();

    this.#output.printLottosCount(lottos.length);
    this.#output.printLottoNumbers(lottos);
    this.#price = price;
    this.#lottos = lottos;
  }

  async prizeLotto() {
    const winningNumbers = await this.#input.getLottoWinningNumbers();
    const bonusNumber = await this.#input.getLottoBonusNumber(winningNumbers);
    const lottosResults = new LottosResults(this.#lottos, winningNumbers, bonusNumber);
    const lottosResultscount = lottosResults.getLottosResultsCount();
    const lottosReturns = new LottosReturns(lottosResultscount);

    this.#output.printLottoResult(lottosResultscount);
    this.#output.printLottoReturns(lottosReturns.getLottosReturns(this.#price));
  }
}

export default LottoService;
