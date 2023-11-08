import CONSTANTS from './Lib/constans.js';
import InputHandler from './View/InputHanlder.js';
import Lotto from './Domain/Lotto/Lotto.js';
import LottoGenerator from './Domain/Purchase/LottoGenerator.js';
import PurchaseAmount from './Domain/Purchase/PurchaseAmount.js';
import ResultReturn from './Domain/Lotto/ResultReturn.js';
import WinningChecker from './Domain/Lotto/WinningChecker.js';
import { inputWithRetry } from './Lib/utils.js';

class App {
  constructor() {
    const lottoTickets = new LottoGenerator();
    this.inputHandler = new InputHandler();
    this.purchaseAmount = new PurchaseAmount(lottoTickets);
    this.resultReturn = new ResultReturn();
  }

  async play() {
    const amount = await inputWithRetry(this.inputHandler.purchaseAmount.bind(this));
    const lottoTickets = this.purchaseAmount.purchaseLotto(amount);

    const winningNumbers = await inputWithRetry(this.inputHandler.winningNumbers.bind(this));
    const bonusNumber = await inputWithRetry(
      this.inputHandler.bonusNumber.bind(this),
      winningNumbers,
    );

    const validatedNumbers = new Lotto(winningNumbers.split(CONSTANTS.string.comma).map(Number));
    const winningChecker = new WinningChecker(validatedNumbers.numbers);

    const lottoCheckerResult = winningChecker.compareWinningAndLotto(bonusNumber, lottoTickets);
    winningChecker.printTotalResult(lottoCheckerResult);

    this.resultReturn.calculateReturnRate(lottoCheckerResult, amount);
  }
}

export default App;
