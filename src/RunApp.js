import Lotto from "./Lotto.js";
import ErrorMessages from "./common/errorMessages.js";
import printBonusNumber from "./ui/PrintBonusNumber.js";
import purchasePriceInput from "./ui/purchasePriceInput.js";
import validateBonusNumber from "./util/validateBonusNumber.js";

class RunApp {
  constructor() {
    this.numbers = [];
  }

  async main() {
    await this.start();
  }

  async start() {
    await purchasePriceInput();
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
    this.numbers.push(bonusNumber);
    console.log(this.numbers);
  }
}

export default RunApp;
