import UserLotto from './UserLotto.js';
import Lotto from './Lotto.js';
import Bonus from './Bonus.js';
import View from './View.js';

class App {
  userLotto;

  winningLotto;

  bonus;

  async getPrice(){
    const amount = await View.inputAmountOfMoney();
    this.userLotto = new UserLotto(amount/1000);
  }

  showLottos(){
    const list = this.userLotto.getList();
    const count = this.userLotto.getCount();
    View.outputUserLottosList(list, count);
  }

  async getWinningNumberAndBonus(){
    let numbers = await View.inputSixWinningNumbers();
    const bonusNumber = await View.inputBonusNumber();
    numbers = numbers.split(',');
    this.winningLotto = new Lotto(numbers);
    this.bonus = new Bonus(bonusNumber);
  }

  async play() {
    await this.getPrice();
    this.userLotto.createLottos();
    this.showLottos();
    this.getWinningNumberAndBonus();
  }
}

export default App;
