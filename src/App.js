import INPUT from "../view/Input.js";
import OUTPUT from "../view/Output.js";
import COMPUTER from "./Computer.js";
import AppError from "../constant/AppError.js";
import MESSAGE from "../constant/Message.js";


class App {
  async play() {
    try {
      const amount = await this.INPUT.Price();
      const lotteries = this.COMPUTER.sell(amount);
      this.OUTPUT.printLottoPurchaseInformation(lotteries.map(lotto => lotto.getInformation()));
      
      const Number = await this.INPUT.Number();
      const bonusNumber = await this.INPUT.BonusNumber(Number);
      const LottoResult = lotteries.map(lotto => lotto.checkNumbers(Number, bonusNumber));
      
    } catch (error) {
      if (error instanceof AppError) {
        this.ui.print(error.message);
        await this.play();
      }
      throw error;
    }
  }

 
}

export default App;

