import UserLotto from './UserLotto.js';
import Lotto from './Lotto.js';
import Bonus from './Bonus.js';
import View from './View.js';
import Computer from './Computer.js';

class App {
  #amount;

  userLotto;

  lotto;

  bonus;

  computer;

  constructor() {
    this.computer = new Computer();
  }

  async getPrice() {
    this.#amount = await View.inputAmountOfMoney();
    this.userLotto = new UserLotto(this.#amount / 1000);
  }

  showLottos() {
    const list = this.userLotto.getList();
    const count = this.userLotto.getCount();
    View.outputUserLottosList(list, count);
  }

  async getWinningNumber() {
    let numbers = await View.inputSixWinningNumbers();
    numbers = numbers.split(',');
    this.lotto = new Lotto(numbers);
  }

  async getBonusNumber() {
    const bonusNumber = await View.inputBonusNumber();
    this.bonus = new Bonus(bonusNumber, this.lotto.getNumbers());
  }

  computeConditions() {
    this.userLotto.getList().forEach((lottos) => {
      const LottoMatch = this.lotto.howManyMatchesLotto(lottos);
      const bonusMatch = this.bonus.computeMatchWithBonus(lottos);
      this.computer.updateState(LottoMatch, bonusMatch);
    });
  }

  async play() {
    await this.getPrice();
    this.userLotto.createLottos();
    this.showLottos();
    await this.getWinningNumber();
    await this.getBonusNumber();
    this.computeConditions();
  }
}

export default App;
