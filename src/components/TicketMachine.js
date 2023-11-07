import { Random } from '@woowacourse/mission-utils';
import { MAGIC_NUMBER } from '../constants/numbers.js';

import View from '../view/View.js';

class TicketMachine {
  #purchaseAmount = 0;

  constructor(purchaseAmount) {
    this.#purchaseAmount = Number(purchaseAmount);
  }

  getNumberOfGame() {
    const TicktesCount = this.#purchaseAmount / MAGIC_NUMBER.TICKET_PRICE;
    View.printPurchasedTicketNumber(TicktesCount);
    return TicketMachine.getTickets(TicktesCount);
  }

  static getTickets(TicktesCount) {
    const ticktes = Array.from({ length: TicktesCount }, () =>
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
