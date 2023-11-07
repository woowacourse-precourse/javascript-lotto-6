import { MissionUtils } from '@woowacourse/mission-utils';
import { Message } from './Message.js';
import { Validate } from './Validate.js';
import Lotto from './Lotto.js';
import { PRIZE_MONEY, PURCHASE_UNIT } from './constant.js';

class App {
  #lottos = [];
  #prize = {};
  #winningLotteryNumber;
  #bonusNumber;
  #profit;

  async play() {
    try {
      await this.issueLottos();
      this.printLottosNumbers();
      await this.inputWinningLotteryNumbers();
      await this.inputBonusNumber();
      this.gatherResult();
      this.printResult();
    } catch (e) {
      MissionUtils.Console.print(e.message);
    }
  }

  async issueLottos() {
    const money = await Message.inputPurchasingAmount();
    Validate.purchasingLottos(money);
    const count = money / PURCHASE_UNIT;

    for (let i = 0; i < count; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      this.#lottos.push(new Lotto(numbers));
    }
  }

  printLottosNumbers() {
    Message.printNumberOfLottos(this.#lottos.length);
    this.#lottos.forEach((lotto) => {
      Message.printLottoNumber(lotto.getNumbers());
    });
  }

  async inputWinningLotteryNumbers() {
    const value = await Message.inputWinningLotteryNumbers();
    const numbers = value.split(',').map(Number);
    Validate.LotteryNumbers(numbers);
    this.#winningLotteryNumber = numbers;
  }

  async inputBonusNumber() {
    const number = await Message.inputBonusNumber();
    Validate.bonusNumber(number, this.#winningLotteryNumber);
    this.#bonusNumber = Number(number);
  }

  gatherResult() {
    const result = this.#lottos.map((lotto) =>
      lotto.compareNumbersOf(this.#winningLotteryNumber, this.#bonusNumber),
    );
    result.forEach((rank) => {
      if (!rank) return;
      this.#prize[rank] = this.#prize[rank] ? this.#prize[rank] + 1 : 1;
    });

    const totalPrice = this.calculateTotalPrice(result);
    const profit = this.calculateProfit(totalPrice);
    this.#profit = profit;
  }

  printResult() {
    Message.printWinningStats(this.#prize);
    Message.printProfit(this.#profit);
  }

  calculateTotalPrice(result) {
    return result.reduce((acc, cur) => {
      return (acc = cur ? acc + PRIZE_MONEY[cur] : acc);
    }, 0);
  }

  calculateProfit(totalPrice) {
    return ((totalPrice / (this.#lottos.length * PURCHASE_UNIT)) * 100).toFixed(1);
  }
}

export default App;
