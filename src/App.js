import User from "./User.js";

class App {
  async play() {
    await User.inputLottoPurchaseAmout();
    await User.inputWinningNumber();
    await User.inputBonusNumber();
  }
}

export default App;
