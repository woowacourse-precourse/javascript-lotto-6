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

  async getWinningNumber(){
    let numbers = await View.inputSixWinningNumbers();
    numbers = numbers.split(',');
    this.winningLotto = new Lotto(numbers);
    
  }

  async getBonusNumber(){
    const bonusNumber = await View.inputBonusNumber();
    this.bonus = new Bonus(bonusNumber, this.winningLotto.getNumbers());
  }

  async play() {
    await this.getPrice();
    this.userLotto.createLottos();
    this.showLottos();
    await this.getWinningNumber();
    this.getBonusNumber();
  }
}

export default App;
