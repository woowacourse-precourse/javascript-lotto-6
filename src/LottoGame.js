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
    const profit = this.calculateTotalResultPrice();
    // console.log(profit);
    const profitPercentage = this.calculateProfit(this.#numberOfLotto, profit);
    // console.log(profitPercentage);
    Console.print(`총 수익률은 ${profitPercentage}%입니다.`);
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
    this.#numberOfLotto = numberOfLotto;
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
      this.saveResult(result, lotto);
    });
  }
  saveResult(result, lotto) {
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
    const keys = Object.keys(this.#lottoResult); // ['name', 'weight', 'price', 'isFresh']
    // console.log(keys);
    for (let i = 0; i < keys.length; i++) {
      let property = keys[i];
      // // console.log(property);
      // console.log(this.#lottoResult[property]);
      // console.log(WINNING_PRICE[property]);
      price += this.#lottoResult[property] * WINNING_PRICE[property];
    }

    return price;
  }
  calculateProfit(count, prize) {
    // console.log(count);
    const money = count * 1000;
    // console.log(prize);
    // console.log(money);

    const percentage = ((prize / money) * 100).toFixed(1);
    return percentage;
  }
}
export default LottoGame;
