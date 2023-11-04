import LottoPurchase from "./LottoPurchase.js";
import WinningNumberInput from "./WinningNumberInput.js";

class App {
  async play() {
    const lottos = await LottoPurchase.buyWithUserInput();
    LottoPurchase.print(lottos);
  }
}

export default App;
