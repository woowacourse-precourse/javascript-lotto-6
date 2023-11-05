import Lotto from '../Lotto.js';
import LottoTicket from '../model/LottoTicket.js';

class LottoService {
  #purchaseMoney;
  #tickets;

  constructor(purchaseMoney) {
    this.#purchaseMoney = purchaseMoney;
  }

  issueTickets() {
    this.#tickets = new LottoTicket(this.#purchaseMoney).getTickets();
    return this.#tickets;
  }

  calculatePrizeResult(winningNumbers, bonusNumber) {
    this.#tickets.map(numbers => {
      return new Lotto(numbers).checkPrize(winningNumbers, bonusNumber);
    });
  }
}

export default LottoService;
