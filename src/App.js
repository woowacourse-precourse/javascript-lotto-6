import UserInput from './view/userInput.js';
import Amount from './controller/Amount.js';

import Lotto from './controller/Lotto.js';
import makeLottoNumbers from './controller/makeLottoNumbers.js';

class App {
  constructor() {
    this.UserInput = new UserInput();
  }

  async play() {
    const amount = await this.UserInput.RequestAmount();
    this.amount = new Amount(amount);
    // const lottoNumbers = makeLottoNumbers(amount);
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
