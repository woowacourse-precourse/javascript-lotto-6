import Print from "./Print.js";
import Validate from "./Validate.js";

class App {
  async play() {
    try {
      const sum = await Print.getPurchaseSum();
      this.checkValidPurchaseSum(sum);
    } catch (error) {
      Print.showErrorMessage(error.message);
      await this.play();
    }
  }

  checkValidPurchaseSum(input) {
    const validate = new Validate();
    validate.isValidPurchaseSum(input);
  }
}

export default App;
