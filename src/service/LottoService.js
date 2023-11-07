import OutputView from '../view/OutputView.js';
import InputView from '../view/InputView.js';
import LottosGenerator from './LottosGenerator.js';
import LottosResults from './LottosResults.js';
import LottosReturns from './LottosReturns.js';

class LottoService {
  #input;
  #output;

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

    return {
      lottos: lottos,
      price: price,
    };
  }

  async prizeLotto(lottos, price) {
    const winningNumbers = await this.#input.getLottoWinningNumbers();
    const bonusNumber = await this.#input.getLottoBonusNumber(winningNumbers);
    const lottosResults = new LottosResults(lottos, winningNumbers, bonusNumber);
    const lottosResultscount = lottosResults.getLottosResultsCount();
    const lottosReturns = new LottosReturns(lottosResultscount);

    this.#output.printLottoResult(lottosResultscount);
    this.#output.printLottoReturns(lottosReturns.getLottosReturns(price));
  }
}

export default LottoService;
