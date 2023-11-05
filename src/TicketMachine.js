import { Random } from '@woowacourse/mission-utils';
import { MAGIC_NUMBER } from './constants/magicNumber.js';
import View from './View.js';
import Validator from './utils/Validator.js';

class TicketMachine {
  #purchaseAmount = 0;

  constructor(purchaseAmount) {
    Validator.checkPurchaseAmount(purchaseAmount);
    this.#purchaseAmount = purchaseAmount;
  }

  getNumberOfGame() {
    this.purchasedTicktesCount = Number(this.#purchaseAmount) / 1000;
    return TicketMachine.getTickets(this.purchasedTicktesCount);
  }

  static getTickets(purchasedTicktesCount) {
    const ticktes = Array.from({ length: purchasedTicktesCount }, () =>
      Random.pickUniqueNumbersInRange(
        MAGIC_NUMBER.MIN_NUMBER,
        MAGIC_NUMBER.MAX_NUMBER,
        MAGIC_NUMBER.LOTTO_NUMBER_COUNT,
      ),
    );
    View.printPurchasedTicketsInfo(purchasedTicktesCount, ticktes);
    return ticktes;
  }
}

export default TicketMachine;
