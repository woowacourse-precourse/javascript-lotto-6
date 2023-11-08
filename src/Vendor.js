import { Console, Random } from '@woowacourse/mission-utils';

export default class Vendor {
  async recieveMoney() {
    try {
      const user = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
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
      throw new Error('[ERROR] 금액은 숫자만 입력가능합니다.');
    }
    if (paid % 1000 !== 0 || paid < 1000) {
      throw new Error('[ERROR] 로또는 1000원 단위로 구매 가능합니다.');
    }
  }

  issueTickets(paid) {
    const numOfTickets = paid / 1000;
    Console.print(`\n${numOfTickets}개를 구매했습니다.`);
    const tickets = [];
    for (let i = 0; i < numOfTickets; i += 1) {
      const ticket = Random.pickUniqueNumbersInRange(1, 45, 6);
      ticket.sort((a, b) => a - b);
      tickets.push(ticket);
      Console.print(ticket);
    }
    return tickets;
  }
}
