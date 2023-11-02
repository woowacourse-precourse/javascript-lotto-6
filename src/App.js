import Print from "./Print.js";
import Validate from "./Validate.js";
import Utils from "./Utils.js";

class App {
  async play() {
    try {
      const sum = await Print.getPurchaseSum();
      this.checkValidPurchaseSum(sum);
      const amount = Utils.getLottoAmount(sum);
      this.purchaseLotto(amount);
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
  }
}

export default App;
