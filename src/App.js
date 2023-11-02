import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class App {
  async play() {
    const purchaseAmount = await this.getPurchaseAmount();
    const tickets = this.createTickets(purchaseAmount);
  }
  
  async getPurchaseAmount() {
    const input = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');
    return input;
  }

  createTickets(amount) {
    const count = amount / 1000;
    const tickets = [];

    for (let i = 0; i < count; i += 1) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      const newTicket = new Lotto(numbers);
      tickets.push(newTicket);
    }
    
    return tickets;
  }
}

export default App;
