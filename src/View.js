import { Console } from '@woowacourse/mission-utils';
import { INFO_MESSAGE } from './constants/messages.js';

class View {
  static getUserInput(amount) {
    return Console.readLineAsync(amount);
  }

  static printMessage(message) {
    return Console.print(message);
  }

  static printPurchasedTicketsInfo(purchasedTicktesCount, ticktes) {
    Console.print(
      `\n${purchasedTicktesCount}${INFO_MESSAGE.PURCHASED_TICKETS_COUNT_MESSAGE}`,
    );
    ticktes.forEach(ticket => {
      Console.print(ticket);
    });
  }
}

export default View;
