import UserLotto from './UserLotto.js';
import View from './View.js';

class App {
  userLotto;

  async getPrice(){
    const amount = await View.inputAmountOfMoney();
    this.userLotto = new UserLotto(amount/1000);
  }

  showLottos(){
    const list = this.userLotto.getList();
    const count = this.userLotto.getCount();
    View.outputUserLottosList(list, count);

  }

  async play() {
    await this.getPrice();
    this.userLotto.createLottos();
    this.showLottos();
  }
}

export default App;
