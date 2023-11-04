import InputView from "./View/InputView.js";

class App {
  async play() {}

  async #getLottoPurchaseAmount() {
    const lottoPurchaseAmount = await InputView.readLottoPurchaseAmount();
    return lottoPurchaseAmount;
  }
}

export default App;
