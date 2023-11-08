import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import LottoMachine from './LottoMachine.js';

class Seller {
  #lottoMachine;

  #winningNumber;

  #bonusNumber;

  constructor() {
    this.ticketList = [];
    this.result = [];
  }

  setAmount(money) {
    const amount = money / 1000;
    OutputView.printAmount(amount);
    this.setLottoTicket(amount);
  }

  setLottoTicket(amount) {
    for (let order = 0; order < amount; order += 1) {
      this.#lottoMachine = new LottoMachine();
      const ticket = this.#lottoMachine.makeTicket();
      this.ticketList.push(ticket);
    }
    OutputView.printTickets(this.ticketList);
  }

  async makeWinnigNumber() {
    this.#winningNumber = await InputView.InputWinningNumber();
    this.#bonusNumber = await InputView.InputBonusNumber();
    const NumberSet = {
      winningNumber: this.#winningNumber,
      bonusNumber: this.#bonusNumber,
      ticketList: this.ticketList,
    };
    return NumberSet;
  }
}

export default Seller;
