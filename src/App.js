import INPUT from './view/Input.js';
import OUTPUT from './view/Output.js';
import COMPUTER from './Computer.js';
import AppError from './constant/AppError.js';
import CALCULATE from './Calculate.js';

class App {
  constructor() {
    this.input = new INPUT();
    this.output = new OUTPUT();
    this.computer = new COMPUTER();
    this.calculate = new CALCULATE();
  }

  async handleAppError(error) {
    if (error instanceof AppError) {
      this.output.print(error.message);
      await this.play();
    } else {
      throw error;
    }
  }

  async play() {
    try {
      await this.playLotteryGame();
    } catch (error) {
      await this.handleAppError(error);
    }
  }

  async playLotteryGame() {
    const amount = await this.input.Price();
    const lotteries = this.computer.sell(amount);
    this.output.PurchaseInformation(lotteries.map(Lotto => Lotto.getInformation()));

    const Number = await this.input.Number();
    const bonusNumber = await this.input.BonusNumber(Number);
    const lottoResult = lotteries.map(lotto => lotto.checkNumber(Number, bonusNumber));

    const finalResult = this.calculate.calculateResult(lottoResult);
    const Rate = this.calculate.calculateRate(finalResult, amount);
    this.output.Statistics(finalResult, Rate);
  }
}

export default App;
