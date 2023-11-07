import { MissionUtils } from '@woowacourse/mission-utils';
import { ONE, THREE, THOUSAND, HUNDRED } from './constants/numbers.js';
import { COUNT, PERCENT, HYPHEN, INPUT, LINE_BREAK, OUTPUT } from './constants/messages.js';
import { matchNumbers } from './variables/data.js';
import Bonus from './Bonus.js';
import Lotto from './Lotto.js';
import Money from './Money.js';
import Result from './Result.js';

class App {
  price;
  count;
  winning;
  bonus;
  profit;
  lottos = [];

  async play() {
    await this.inputPrice();
    this.makeLottos();
    this.outputLottos();
    await this.inputWinning();
    await this.inputBonus();
    this.calculateResult();
    this.outputResult();
  }

  async inputPrice() {
    try {
      const price = await MissionUtils.Console.readLineAsync(`${INPUT.price}${LINE_BREAK}`);
      const money = new Money(price);
      
      this.price = money.getPrice();
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return this.inputPrice();
    }
  }

  makeLottos() {
    this.count = this.price / THOUSAND;

    let count = 0;
    while (count < this.count) {
      const lotto = new Lotto();
      this.lottos.push(lotto.getNumbers().sort((prev, curr) => prev - curr));

      count = count + 1;
    }
  }

  outputLottos() {
    const totalLottos = this.lottos.map(lotto => `[${lotto.join(', ')}]`).join(LINE_BREAK);
    
    MissionUtils.Console.print(`${LINE_BREAK}${this.count}${OUTPUT.count}${LINE_BREAK}${totalLottos}`);
  }

  async inputWinning() {
    try {
      const winningNumbers = await MissionUtils.Console.readLineAsync(`${LINE_BREAK}${INPUT.winning_numbers}${LINE_BREAK}`);
      const winningLotto = new Lotto(winningNumbers.split(','));
      
      this.winning = winningLotto.getNumbers();
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return this.inputWinning();
    }
  }

  async inputBonus() {
    try {
      const bonusNumber = await MissionUtils.Console.readLineAsync(`${LINE_BREAK}${INPUT.bonus_number}${LINE_BREAK}`);
      const bonusLotto = new Bonus(bonusNumber, this.winning);
      
      this.bonus = bonusLotto.getNumber();
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return this.inputBonus();
    }
  }

  calculateResult() {
    const result = new Result(this.lottos, this.winning, this.bonus);
    result.spreadLottos();
    result.countProfit();

    this.profit = result.getProfit();
  }

  outputResult() {
    const profitRate = (this.profit / this.price * HUNDRED).toFixed(ONE).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    const results = [
      `${OUTPUT.three_match}${matchNumbers.three}${COUNT}`,
      `${OUTPUT.four_match}${matchNumbers.four}${COUNT}`,
      `${OUTPUT.five_match}${matchNumbers.five}${COUNT}`,
      `${OUTPUT.five_plus_bonus_match}${matchNumbers.fivePlusBonus}${COUNT}`,
      `${OUTPUT.six_match}${matchNumbers.six}${COUNT}`
    ];
    const totalResult = [`${LINE_BREAK}${OUTPUT.winning_statistics}${LINE_BREAK}${HYPHEN.repeat(THREE)}`, ...results, `${OUTPUT.total_profit_margin}${profitRate}${PERCENT}`];
  
    MissionUtils.Console.print(totalResult.join(LINE_BREAK));
  }
}

// const app = new App();
// app.play();

export default App;
