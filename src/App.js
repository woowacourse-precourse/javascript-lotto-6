import UserLotto from './UserLotto.js';
import View from './View.js';

class App {
  userLotto;

  async getPrice(){
    const amount = await View.inputAmountOfMoney();
    this.userLotto = new UserLotto(amount/1000);
  }

  async play() {
    this.getPrice();
  }
}

export default App;
