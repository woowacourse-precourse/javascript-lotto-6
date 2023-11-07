import { Random } from '@woowacourse/mission-utils';
import { MAGIC_NUMBER } from './constants/numbers.js';

import View from './View.js';

class TicketMachine {
  #purchaseAmount = 0;

  constructor(purchaseAmount) {
    try {
      this.#purchaseAmount = purchaseAmount;
    } catch (error) {
      this.buyTicketsaAgain();
    }
  }

  getNumberOfGame() {
    const purchasedTicktesCount = Number(this.#purchaseAmount) / 1000;
    View.printPurchasedTicketNumber(purchasedTicktesCount);
    return TicketMachine.getTickets(purchasedTicktesCount);
  }

  static getTickets(purchasedTicktesCount) {
    const ticktes = Array.from({ length: purchasedTicktesCount }, () =>
      Random.pickUniqueNumbersInRange(
        MAGIC_NUMBER.MIN_NUMBER,
        MAGIC_NUMBER.MAX_NUMBER,
        MAGIC_NUMBER.LOTTO_NUMBER_LENGTH,
      ),
    );
    View.printPurchasedTicketsInfo(ticktes);
    return ticktes;
  }
}

export default TicketMachine;
