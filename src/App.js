import { Console } from '@woowacourse/mission-utils';
import InputView from './InputView.js';
import Machine from './LottoMachine.js';
import LottoGenerator from './LottoGenerator.js';
import LottoResultCalculator from './LottoMachine.js';
import OutputView from './OutputView.js';

class App {
  constructor() {
    this.inputview = new InputView();
    this.machine = new Machine();
    this.lottoGenerator = new LottoGenerator();
    this.outputView = new OutputView();
  }

  async play() {
    try {
      const amountLotto = await this.getAndValidateAmountMoney();
      const purchase = this.lottoGenerator.purchaseLotto(amountLotto);

      const winningNumber = await this.getAndValidateWinningNumber();
      const bonusNumber = await this.getAndValidateBonusNumber();

      const results = LottoResultCalculator.calculateResults(purchase, winningNumber, bonusNumber);
      this.outputView.printHeader();
      this.outputView.printResult(results);
    } catch (error) {
      Console.print(error.message);
    }
  }

  async getAndValidateAmountMoney() {
    while (true) {
      try {
        const playerMoney = await this.inputview.amountOfMoney();
        return this.machine.CalculatorOfLottoAmount(playerMoney);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async getAndValidateWinningNumber() {
    while (true) {
      try {
        const inputLotto = await this.inputview.playerWinningNumber();
        Console.print(inputLotto);
        return inputLotto.getNumbers();
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async getAndValidateBonusNumber() {
    while (true) {
      try {
        const bonusNumber = await this.inputview.playerBonusNumber();
        return bonusNumber;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}

const app = new App();
app.play();

export default App;
