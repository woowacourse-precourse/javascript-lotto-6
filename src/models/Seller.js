import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import LottoMachine from './LottoMachine.js';
import Lotto from '../Lotto.js';

class Seller {
  #lottoMachine;

  #lotto;

  constructor() {
    this.ticketList = [];
    this.result = [];
  }

  setAmount(money) {
    const amount = money / 1000;
    OutputView.printAmount(amount, this.makeLotto);
    this.setLottoTicket(amount);
  }

  setLottoTicket(amount) {
    for (let order = 0; order < amount; order += 1) {
      this.#lottoMachine = new LottoMachine();
      const ticket = this.#lottoMachine.makeTicket();
      this.ticketList.push(ticket);
    }
    OutputView.printTickets(this.ticketList);
    this.makeWinnigNumber();
  }

  async makeWinnigNumber() {
    const winningNumber = await InputView.InputWinningNumber();
    this.#lotto = new Lotto(winningNumber, this.ticketList);
    const bonusNumber = await InputView.InputBonusNumber();
    this.#lotto.confirmNumber(bonusNumber);
    this.printResult();
  }

  printResult() {
    const result = this.#lotto.getResult();
    OutputView.printResult(result);
  }
}

export default Seller;
