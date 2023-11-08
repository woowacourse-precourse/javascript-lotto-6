import Lotto from "./Lotto.js";
import calculateWinningLottosCount from "./controller/result/calculateWinningLottosCount.js";
import printBonusNumber from "./ui/PrintBonusNumber.js";
import printWinningStatic from "./ui/PrintWinningStatic.js";
import purchasePriceInput from "./ui/PurchasePriceInput.js";

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
    const bonusNumber = await printBonusNumber(this.numbers);
    this.bonus.push(bonusNumber);
  }
}

export default RunApp;
