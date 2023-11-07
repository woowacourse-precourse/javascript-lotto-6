import { Input } from "./Input.js";
import { Output } from "./Output.js";
import PurchasePrice from "./PurchasePrice.js";
import Lotto from "./Lotto.js";
import BonusNumber from "./BonusNumber.js";

class App {
  purchasePrice = 0;
  lotto = [];
  bonusNumber = 0;

  constructor() {
    this.game = new Game();
  }

  async getPurchasePrice() {
    try {
      this.purchasePrice = await Input.inputPurchasePrice();
      Output.showEnter();
      return new PurchasePrice(this.purchasePrice);
    } catch (error) {
      Output.showError(error);
      return this.getPurchasePrice();
    }
  }

  async getLottoNumbers() {
    try {
      this.lotto = await Input.inputLotto();
      Output.showEnter();
      return new Lotto(this.lotto);
    } catch (error) {
      Output.showError(error);
      return this.getLottoNumbers();
    }
  }

  async getBonusNumber() {
    try {
      this.bonusNumber = await Input.inputBonusNumber();
      Output.showEnter();
      return new BonusNumber(this.bonusNumber);
    } catch (error) {
      Output.showError(error);
      return this.getBonusNumber();
    }
  }

  async play() {
    await this.getPurchasePrice();
    await this.getLottoNumbers();
    await this.getBonusNumber();
  }
}

export default App;
