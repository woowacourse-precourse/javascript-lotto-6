import { Console } from '@woowacourse/mission-utils';
import { prompt, result } from './constants/message.js';
import BuyLotto from './BuyLotto.js';

class App {
  buyLotto = new BuyLotto();

  async play() {
    const expense = await Console.readLineAsync(prompt.ASK_AMOUNT);
    const lotteryTicketCount = this.buyLotto.buyLottoCount(expense);

    Console.print(`\n${lotteryTicketCount}${result.PURCHASE}`);
  }
}
export default App;
