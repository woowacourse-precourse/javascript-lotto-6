import Input from './Input.js';
import Lotto from './Lotto.js';
import { Random, Console } from '@woowacourse/mission-utils';
import { WINNING_PRICE } from './constants/index.js';
class LottoGame {
  #numberOfLotto;
  #lotteries;
  #winningLottery;
  #bonusNumber;
  #lottoResult;

  constructor() {
    this.#numberOfLotto = 0;
    this.#lotteries = [];
    this.#winningLottery = [];
    this.#bonusNumber = 0;
    this.#lottoResult = {
      onePoint: 0,
      twoPoint: 0,
      threePoint: 0,
      fourPoint: 0,
      fivePoint: 0,
      fivePointAndBonus: 0,
      sixPoint: 0,
    };
  }
  async play() {
    const { lotteries, winningLottery, bonusNumber } = await this.#setConfig();

    //당첨내역을 계산한다.
    this.calculateWinningHistory();
    this.printResultCount();

    //수익률을 계산한다.
    // this.#view.printRaceResult({ winner, raceResult });
  }
  printResultCount() {
    Console.print(`\n당첨 통계`);
    Console.print(`---`);
    Console.print(`3개 일치 (5,000원) - ${this.#lottoResult.threePoint}개`);
    Console.print(`4개 일치 (50,000원) - ${this.#lottoResult.fourPoint}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.#lottoResult.fivePoint}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${
        this.#lottoResult.fivePointAndBonus
      }개`
    );
    Console.print(
      `6개 일치 (2,000,000,000원) - ${this.#lottoResult.sixPoint}개`
    );
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
    const { winningLottery, bonusNumber } = await Input.getWinningLottery();
    this.#lotteries = lotteries;
    this.#winningLottery = winningLottery;
    this.#bonusNumber = bonusNumber;
    return { lotteries, winningLottery, bonusNumber };
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
  calculateWinningHistory() {
    this.#lotteries.forEach((lottery) => {
      let lotto = lottery.printLotto();
      let result = this.matchingValues(lotto, this.#winningLottery);
      this.saveResult(result);
    });
  }
  saveResult(result) {
    if (result === 1) {
      this.#lottoResult.onePoint = +1;
    }
    if (result === 2) {
      this.#lottoResult.twoPoint = +1;
    }
    if (result === 3) {
      this.#lottoResult.threePoint = +1;
    }
    if (result === 4) {
      this.#lottoResult.fourPoint = +1;
    }
    if (result === 5 && this.isMatchBonus(lotto, this.#bonusNumber)) {
      this.#lottoResult.fivePointAndBonus = +1;
    }
    if (result === 5) {
      this.#lottoResult.fivePoint = +1;
    }
    if (result === 6) {
      this.#lottoResult.sixPoint = +1;
    }
  }
  matchingValues(arr, answer) {
    const set1 = new Set(arr);
    const set2 = new Set(answer);
    let count = 0;

    for (const num of set1) {
      if (set2.has(num)) {
        count++;
      }
    }

    return count;
  }
  isMatchBonus(bonus, arr) {
    arr.forEach((num) => (bonus === num ? true : false));
  }
  calculateTotalResultPrice() {
    let price = 0;
    this.#lottoResult.forEach((num, idx) => {
      price += num * WINNING_PRICE[idx];
    });

    return price;
  }
  calculateProfit(money, prize) {
    const percentage = ((prize / money) * 100).toFixed(1);
    return percentage;
  }
}
export default LottoGame;
