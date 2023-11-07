import { Console } from '@woowacourse/mission-utils';
import UserLotto from './UserLotto.js';
import Lotto from './Lotto.js';
import Bonus from './Bonus.js';
import View from './View.js';
import Computer from './Computer.js';
import Validate from './Validate.js';

class App {
  amount;

  userLotto;

  lotto;

  bonus;

  computer;

  earningRate;

  constructor() {
    this.computer = new Computer();
  }

  async getPrice() {
    this.amount = await View.inputAmountOfMoney();
    try {
      Validate.isItNumber(this.amount);
      Validate.isItUnitOf1000(this.amount);
      this.userLotto = new UserLotto(this.amount / 1000);
    } catch (err) {
      Console.print(err.message);
      await this.getPrice();
    }
  }

  showLottos() {
    const list = this.userLotto.getList();
    const count = this.userLotto.getCount();
    View.outputUserLottosList(list, count);
  }

  async getWinningNumber() {
    let numbers = await View.inputSixWinningNumbers();
    numbers = numbers.split(',');
    try {
      this.lotto = new Lotto(numbers);
    } catch (err) {
      Console.print(err.message);
      await this.getWinningNumber();
    }
  }

  async getBonusNumber() {
    const bonusNumber = await View.inputBonusNumber();
    try {
      this.bonus = new Bonus(bonusNumber, this.lotto.getNumbers());
    } catch (err) {
      Console.print(err.message);
      await this.getBonusNumber();
    }
  }

  computeConditions() {
    this.userLotto.getList().forEach((lottos) => {
      const LottoMatch = this.lotto.howManyMatchesLotto(lottos);
      const bonusMatch = this.bonus.computeMatchWithBonus(lottos);
      this.computer.updateState(LottoMatch, bonusMatch);
    });
  }

  computeEarningRate() {
    this.earningRate = this.computer.earningRate(this.amount, this.computer.state);
  }

  showComputeResult() {
    View.outputComputeResult(this.computer.state);
    View.outputEarningRate(this.earningRate);
  }

  async play() {
    await this.getPrice();
    this.userLotto.createLottos();
    this.showLottos();
    await this.getWinningNumber();
    await this.getBonusNumber();
    this.computeConditions();
    this.computeEarningRate();
    this.showComputeResult();
  }
}

export default App;
