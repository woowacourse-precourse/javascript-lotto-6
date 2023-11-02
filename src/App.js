import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class App {
  async play() {
    const purchaseAmount = await this.getPurchaseAmount();
    const tickets = this.createTickets(purchaseAmount);

    this.printTickets(tickets);
  }
  
  async getPurchaseAmount() {
    const input = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');
    return input;
  }

  createTickets(amount) {
    this.validateAmount(amount);

    const count = amount / 1000;
    const tickets = [];

    for (let i = 0; i < count; i += 1) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      const newTicket = new Lotto(numbers);
      tickets.push(newTicket);
    }
    
    return tickets;
  }

  printTickets(tickets) {
    const count = tickets.length;
    MissionUtils.Console.print(`\n${count}개를 구매했습니다.`);

    for (let i = 0; i < count; i += 1) {
      const numbers = tickets[i].getLottoNumbers();
      const text = numbers.join(', ');
      MissionUtils.Console.print(`[${text}]`);
    }
  }

  validateAmount(amount) {
    const remainder = amount % 1000;
    if (remainder) throw new Error('[ERROR] Amount isn\'t valid.');
  }
}

export default App;
