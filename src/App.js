import { input } from "./input.js";
import PurchasePrice from "./PurchasePrice.js";
import Lotto from "./Lotto.js";
import BonusNumber from "./BonusNumber.js";

class App {
  purchasePrice = 0;
  lotto = [];
  bonusNumber = 0;

  constructor() {
    this.purchasePrice = 0;
    this.lotto = [];
    this.bonusNumber = 0;
  }

  async inputLottoMoney() {
    try {
      const price = await input.getInputPurchasePrice();
      this.purchasePrice = new PurchasePrice(price);
    } catch (error) {
      console.error(error);
      return this.inputLottoMoney();
    }
  }

  async inputLottoNumbers() {
    try {
      const lottoArray = await input.getInputLotto();
      this.lotto = new Lotto(lottoArray);
    } catch (error) {
      console.error(error);
      return this.inputLottoNumbers();
    }
  }

  async inputBonusNumber() {
    try {
      const bonus = await input.getInputBonusNumber();
      this.bonusNumber = new BonusNumber(bonus);
    } catch (error) {
      console.error(error);
      return this.inputBonusNumber();
    }
  }

  async play() {
    await this.inputLottoMoney();
    await this.inputLottoNumbers();
    await this.inputBonusNumber();
  }
}

export default App;
