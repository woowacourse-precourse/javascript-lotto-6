import Input from './Input.js';
import Lotto from './Lotto.js';
import { Random, Console } from '@woowacourse/mission-utils';
class LottoGame {
  #numberOfLotto;
  #lotteries;
  #winningLottery;

  constructor() {
    this.#numberOfLotto = 0;
    this.#lotteries = {};
    this.#winningLottery = [];
  }
  async play() {
    const { lotteries, winningLottery } = await this.#setConfig();
    this.#lotteries = lotteries;
    this.#winningLottery = winningLottery;

    //당첨내역을 계산한다.
    this.calculateWinningHistory();
    //수익률을 계산한다.
    // this.#view.printRaceResult({ winner, raceResult });
  }
  async #setConfig() {
    const purchaseAmount = await Input.getPurchaseAmount();
    const numberOfLotto = this.#exchangeTicket(purchaseAmount);
    const lotteries = this.#IssueLottery(numberOfLotto);

    Console.print(`\n${numberOfLotto}개를 구매했습니다.`);
    lotteries.forEach((lottery) => {
      Console.print(`[${lottery.printLotto().join(', ')}]`);
    });

    //당첨 번호를 입력한다. (당첨번호 6자리+ 보너스번호)
    const winningLottery = await Input.getWinningLottery();

    return { lotteries, winningLottery };
  }

  #exchangeTicket(price) {
    const TICKET_PRICE = 1000;
    const ticketCount = price / TICKET_PRICE;
    return ticketCount;
  }
  #IssueLottery(count) {
    const set = new Set();
    const length = 6;
    const range = { from: 1, to: 45 };

    while (set.size < count) {
      let lottery = Random.pickUniqueNumbersInRange(
        range.from,
        range.to,
        length
      ); //[1,2,3,4,5,6]
      set.add(new Lotto(lottery.sort((a, b) => a - b)));
    }
    return Array.from(set);
  }
  calculateWinningHistory() {}
}
export default LottoGame;
