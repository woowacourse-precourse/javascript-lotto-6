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
    this.#tickets = new LottoTicket().issueTickets(this.#purchaseMoney);
    return this.#tickets;
  }

  calculatePrizeResult(winningNumbers, bonusNumber) {
    this.#tickets.map(numbers => {
      return this.countPrize(
        new Lotto(numbers).checkPrize(winningNumbers, bonusNumber),
      );
    });
    return this.#prize;
  }

  countPrize(prize) {
    if (prize === undefined) return;
    this.#prize.set(prize, this.#prize.get(prize) + 1);
  }

  calculateProfitRate() {
    let prizeMoney = 0;
    this.#prize.forEach((matchCount, prize) => {
      prizeMoney += matchCount * PRIZE[prize].money;
    });
    return (prizeMoney / this.#purchaseMoney) * 100;
  }
}

export default LottoService;
