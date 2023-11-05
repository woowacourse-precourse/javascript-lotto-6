import { Random } from '@woowacourse/mission-utils';
import View from './View.js';
import { INFO_MESSAGE } from './constants/messages.js';

class TicketMachine {
  #purchaseAmount = 0;

  #purchasedTicktesCount = 0;

  #ticktes;

  constructor(purchaseAmount) {
    this.#purchaseAmount = purchaseAmount;
    this.getNumberOfGame();
  }

  getNumberOfGame() {
    this.#purchasedTicktesCount = Number(this.#purchaseAmount) / 1000;
    this.getTickets();
  }

  getTickets() {
    this.#ticktes = Array.from({ length: this.#purchasedTicktesCount }, () =>
      Random.pickUniqueNumbersInRange(1, 45, 6),
    );
    View.printPurchasedTicketsInfo(this.#purchasedTicktesCount, this.#ticktes);
  }
}

export default TicketMachine;
