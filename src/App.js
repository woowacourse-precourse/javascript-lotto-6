import Print from "./Print.js";
import Validate from "./Validate.js";
import Utils from "./Utils.js";
import Purchase from "./Purchase.js";

class App {
  async play() {
    try {
      const sum = await Print.getPurchaseSum();
      this.checkValidPurchaseSum(sum);
      const amount = Utils.getLottoAmount(sum);
      this.purchaseLotto(amount);
      await this.getUserLottoInput();
    } catch (error) {
      Print.showErrorMessage(error.message);
      await this.play();
    }
  }

  checkValidPurchaseSum(input) {
    const validate = new Validate();
    validate.isValidPurchaseSum(input);
  }

  purchaseLotto(amount) {
    Print.showPurchaseMessage(amount);
    const purchase = new Purchase(amount);
    const lottos = purchase.getLottos();
    lottos.forEach((lotto) => {
      Print.showLotto(lotto);
    });
  }

  async getUserLottoInput() {
    try {
      const userLotto = await Print.getUserLottoNumber();
    } catch (error) {
      Print.showErrorMessage(error.message);
    }
  }
}

export default App;
