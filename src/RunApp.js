import Lotto from "./Lotto.js";
import ErrorMessages from "./common/errorMessages.js";
import calculateWinningLottosCount from "./controller/result/calculateWinningLottosCount.js";
import printBonusNumber from "./ui/PrintBonusNumber.js";
import printWinningStatic from "./ui/PrintWinningStatic.js";
import purchasePriceInput from "./ui/purchasePriceInput.js";
import validateBonusNumber from "./util/validateBonusNumber.js";

class RunApp {
  constructor() {
    this.numbers = [];
    this.bonus = [];
    this.purchase = [];
  }

  async main() {
    await this.start();
  }

  async start() {
    this.purchase = await purchasePriceInput();
    await this.getLotto();
    await this.getBonusNumber();
  }

  async getLotto() {
    const lottoInstance = new Lotto();
    this.numbers = await lottoInstance.main();
  }

  async getBonusNumber() {
    const bonusNumber = await printBonusNumber();
    if (!validateBonusNumber(this.numbers, bonusNumber))
      throw new Error(`${ErrorMessages.BONUS_NUMBER_ERROR_MESSAGE}`);
    this.bonus.push(bonusNumber);
  }
}

export default RunApp;
