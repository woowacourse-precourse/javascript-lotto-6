import Lotto from './Lotto.js';
import User from './User.js';
import Input from './views/Input.js';
import Output from './views/Output.js';

class App {
  constructor() {
    this.user;
    this.lotto;
  }

  async play() {
    await this.userInputController();
    this.userNumbersOutputController();

    await this.lottoInputController();
    this.resultController();
    this.resultOutputController();
  }

  async userInputController() {
    const purchaseAmount = await Input.readPurchaseAmout();
    this.user = new User(purchaseAmount);
  }

  userNumbersOutputController() {
    const userNumbersToString = this.user.userNumbersList.map((numbers) =>
      numbers.join(', ')
    );

    Output.printUserNumbers(this.user.purchaseNumber, userNumbersToString);
  }

  async lottoInputController() {
    const lottoNumber = await Input.readLottoNumber();
    const bonusNumber = await Input.readBonusNumber();
    this.lotto = new Lotto(lottoNumber, bonusNumber);
  }

  resultController() {
    this.user.userNumbersList.map((userNumbers) => {
      const { lottoCount, isBonus } = this.lotto.getResult(userNumbers);
      this.user.setResult(lottoCount, isBonus);
      this.user.setProfit(lottoCount, isBonus);
    });

    this.user.setYeild();
  }

  resultOutputController() {
    Output.printLottoResult(this.user.results);
    Output.printYeild(this.user.yeild);
  }
}

export default App;
