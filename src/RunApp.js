import { Console } from "@woowacourse/mission-utils";

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
    this.price = 0;
  }

  async main() {
    await this.start();
  }

  async start() {
    await this.purchasedLotto();
    await this.getLotto();
    await this.getBonusNumber();
    printWinningStatic(
      this.price,
      calculateWinningLottosCount(this.purchase, this.numbers, this.bonus)
    );
  }

  async purchasedLotto() {
    const purchaseInput = await purchasePriceInput();
    this.purchase = purchaseInput.purchasedLotto;
    this.price = purchaseInput.price;
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

// while (!validatePriceInput(price)) {
//   Console.print(ErrorMessages.PRICE_INPUT_ERROR_MESSAGE);
//   price = await Console.readLineAsync(Messages.PURCHASE_INPUT_MESSAGE);
// }
