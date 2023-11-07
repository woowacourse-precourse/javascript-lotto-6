import { print } from "./common/utils.js";
import { purchaseAmountInput } from "./view/inputView.js";

class App {
  async play() {
    this.startLotto();
  }

  async startLotto() {
    const amount = await purchaseAmountInput();
  }
}

export default App;
