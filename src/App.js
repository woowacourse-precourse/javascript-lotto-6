import UserInput from './view/userInput.js';
import Amount from './controller/Amount.js';
import Purchase from './controller/Purchase.js';

import Lotto from './controller/Lotto.js';

class App {
  constructor() {
    this.UserInput = new UserInput();
  }

  async play() {
    const amount = await this.UserInput.RequestAmount();
    new Amount(amount);
    const purchaseLotto = new Purchase(amount);
    const arrays = purchaseLotto.public();
    console.log(arrays);

    // const winningNumbers = await this.UserInput.RequestWinningNumbers();
    // const bonusNumber = await this.UserInput.RequestBonus();
    // this.lotto = new Lotto();
    // this.lotto.calculateResult();

    // const numbers = await this.UserInput.RequestWinningNumbers();
    // this.lotto = new Lotto(numbers);
    // this.lotto.RequestInput();
  }
}

export default App;
