import Lotto from '../Lotto.js';
import LottoTicket from '../model/LottoTicket.js';
import { PRIZE } from '../constants/constants.js';

class LottoService {
  #purchaseMoney;
  #tickets;
  #prize = new Map([
    [PRIZE.fifth.name, 0],
    [PRIZE.fourth.name, 0],
    [PRIZE.third.name, 0],
    [PRIZE.second.name, 0],
    [PRIZE.first.name, 0],
  ]);

  constructor(purchaseMoney) {
    this.#purchaseMoney = purchaseMoney;
  }

  issueTickets() {
    this.#tickets = new LottoTicket(this.#purchaseMoney).getTickets();
    return this.#tickets;
  }

  getPrize() {
    return this.#prize;
  }

  calculatePrizeResult(winningNumbers, bonusNumber) {
    this.#tickets.map(numbers => {
      return this.countPrize(
        new Lotto(numbers).checkPrize(winningNumbers, bonusNumber),
      );
    });
  }

  countPrize(prize) {
    if (prize === undefined) return;
    this.#prize.set(prize, this.#prize.get(prize) + 1);
  }
}

export default LottoService;
