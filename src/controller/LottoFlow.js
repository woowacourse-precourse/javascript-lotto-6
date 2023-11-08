import OutputView from '../views/OutputView.js';
import Lotto from '../Lotto.js';
import Customer from '../models/Customer.js';
import Seller from '../models/Seller.js';
import ResultAnalyzer from '../models/ResultAnalyzer.js';

class LottoFlow {
  #customer;

  #seller;

  #lotto;

  #resultAnalizer;

  constructor() {
    this.#customer = new Customer();
    this.#seller = new Seller();
  }

  async makeLotto() {
    const money = await this.#customer.payMoney();
    const amount = this.#seller.setAmount(money);
    this.#seller.setLottoTicket(amount);
    const { winningNumber, bonusNumber, ticketList } =
      await this.#seller.makeWinnigNumber();
    this.processLotto(winningNumber, bonusNumber, ticketList);
  }
  processLotto(winningNumber, bonusNumber, ticketList) {
    this.#lotto = new Lotto(winningNumber, ticketList);
    this.#lotto.confirmNumber(bonusNumber);
    this.endLotto(winningNumber, bonusNumber, ticketList);
    // this.#lotto.noticeNumber();
    // this.#seller.printResult();
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
