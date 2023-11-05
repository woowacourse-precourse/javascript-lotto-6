import INPUT from "../view/Input.js";
import OUTPUT from "../view/Output.js";
import COMPUTER from "./Computer.js";
import AppError from "../constant/AppError.js";
import MESSAGE from "../constant/Message.js";
import CALCULATE from "../calculate/Calculate.js";

class App {
  async play() {
    try {
      const amount = await INPUT.Price();
      const lotteries = COMPUTER.sell(amount);
      OUTPUT.printLottoPurchaseInformation(lotteries.map(lotto => lotto.getInformation()));
      
      const Number = await INPUT.Number();
      const bonusNumber = await INPUT.BonusNumber(Number);
      const lottoResult = lotteries.map(lotto => lotto.checkNumbers(Number, bonusNumber));
      
      const finalResult = CALCULATE.calculateTotalResult(lottoResult);
      const Rate = CALCULATE.calculateProfitRate(finalResult, amount);
      this.OUTPUT.printStatistics(finalResult, Rate);
    } catch (error) {
      if (error instanceof AppError) {
        Consle.print(error.message);
        await this.play();
      }
      throw error;
    }
  }

 
}

export default App;

