import { Console } from '@woowacourse/mission-utils';
import { prompt, result } from './constants/message.js';
import Buyer from './Buyer.js';

class App {
  buyer = new Buyer();

  async play() {
    const expense = await Console.readLineAsync(prompt.ASK_AMOUNT);
    const lotteryTicketCount = this.buyer.buyLottoCount(expense);

    Console.print(`\n${lotteryTicketCount}${result.PURCHASE}`);
  }
}

export default App;
