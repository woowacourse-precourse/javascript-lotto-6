import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import Lotto from '../Lotto.js';
import Seller from '../models/Seller.js';
import ResultAnalyzer from '../models/ResultAnalyzer.js';

class LottoFlow {
  #seller;

  #lotto;

  #resultAnalizer;

  constructor() {
    this.#seller = new Seller();
  }

  async makeLotto() {
    const money = await InputView.InputMoney();
    this.#seller.setAmount(money);
    const { winningNumber, bonusNumber, ticketList } =
      await this.#seller.makeWinnigNumber();
    await this.processLotto(winningNumber, bonusNumber, ticketList);
  }
  async processLotto(winningNumber, bonusNumber, ticketList) {
    this.#lotto = new Lotto(winningNumber, ticketList);
    await this.#lotto.confirmNumber(bonusNumber);
    this.endLotto(winningNumber, bonusNumber, ticketList);
  }
  endLotto(winningNumber, bonusNumber, ticketList) {
    this.#resultAnalizer = new ResultAnalyzer(
      winningNumber,
      bonusNumber,
      ticketList,
    );
    const result = this.#resultAnalizer.findResult();
    OutputView.printResult(result);
  }
}

export default LottoFlow;
