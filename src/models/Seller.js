import InputView from '../views/InputView';
import OutputView from '../views/OutputView';
import LottoMachine from './LottoMachine';
import Lotto from '../Lotto';

class Seller {
  #lottoMachine;

  #lotto;

  constructor() {
    this.ticketList = [];
    this.result = [];
  }

  setAmount(money) {
    const amount = money % 1000;
    OutputView.printAmount(amount, this.makeLotto);
    this.setLottoTicket(amount);
  }

  setLottoTicket(amount) {
    this.#lottoMachine = new LottoMachine();
    for (let order = 0; order < amount; order += 1) {
      const ticket = this.#lottoMachine.makeTicket();
      this.ticketList.push(ticket);
    }
    OutputView.printTickets(this.ticketList);
    this.makeWinnigNumber();
  }

  makeWinnigNumber() {
    const winningNumber = InputView.InputWinningNumber();
    this.#lotto = new Lotto(winningNumber, this.ticketList);
    this.#lotto.makeBonusNumber();
    this.printResult();
  }

  printResult() {
    const result = this.#lotto.getResult();
    OutputView.printResult(result);
  }
}

export default Seller;
