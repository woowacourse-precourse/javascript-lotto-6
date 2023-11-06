import UserLotto from './UserLotto.js';
import Lotto from './Lotto.js';
import View from './View.js';

class App {
  userLotto;

  winningLotto;

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

  async play() {
    await this.getPrice();
    this.userLotto.createLottos();
    this.showLottos();
    this.getWinningNumber();
  }
}

export default App;
