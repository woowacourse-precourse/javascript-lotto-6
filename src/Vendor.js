import { Console, Random } from '@woowacourse/mission-utils';
import { CONSOLE_MASSAGE, ERROR_MESSAGE } from './constants/constant';

export default class Vendor {
  async recieveMoney() {
    try {
      const user = await Console.readLineAsync(CONSOLE_MASSAGE.MONEY_TO_PAY);
      const paid = parseInt(user, 10);
      this.#validate(paid);
      return paid;
    } catch (error) {
      Console.print(error.message);
      return this.recieveMoney();
    }
  }

  #validate(paid) {
    if (!Number.isInteger(paid)) {
      throw new Error(ERROR_MESSAGE.NUMBERS_ONLY);
    }
    if (paid % 1000 !== 0 || paid < 1000) {
      throw new Error(ERROR_MESSAGE.THOUSANDS_ONLY);
    }
  }

  issueTickets(paid) {
    const numOfTickets = paid / 1000;
    const tickets = [];
    Console.print(`\n${numOfTickets}개를 구매했습니다.`);
    for (let i = 0; i < numOfTickets; i += 1) {
      const ticket = Random.pickUniqueNumbersInRange(1, 45, 6);
      ticket.sort((a, b) => a - b);
      tickets.push(ticket);
      Console.print(`[${ticket.join(', ')}]`);
    }
    return tickets;
  }
}
