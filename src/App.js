import UserInput from './view/userInput.js';
import Amount from './controller/Amount.js';
import Purchase from './controller/Purchase.js';
import Lotto from './controller/Lotto.js';
import Bonus from './controller/Bonus.js';

class App {
  constructor() {
    this.UserInput = new UserInput();
  }

  async play() {
    const amount = await this.UserInput.RequestAmount();
    new Amount(amount);
    const purchase = new Purchase(amount);
    const arrays = purchase.public();
    const numbers = await this.UserInput.RequestWinningNumbers();
    new Lotto(numbers);

    const bonusNumber = await this.UserInput.RequestBonus();
    const bonus = new Bonus(bonusNumber, numbers);
    
    // this.lotto = new Lotto();
    // this.lotto.calculateResult();

    // const numbers = await this.UserInput.RequestWinningNumbers();
    // this.lotto = new Lotto(numbers);
    // this.lotto.RequestInput();
  }
}

export default App;
