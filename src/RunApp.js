import Lotto from "./Lotto.js";
import PurchasePriceInput from "./ui/purchasePriceInput.js";

class RunApp {
  constructor() {
    this.numbers = [];
  }

  async main() {
    await this.start();
  }

  async start() {
    const purchasePriceInput = new PurchasePriceInput();
    await purchasePriceInput.print();
    await this.getLotto();
  }

  async getLotto() {
    const lottoInstance = new Lotto();
    this.numbers = await lottoInstance.main();
    console.log(this.numbers);
  }
}

export default RunApp;
