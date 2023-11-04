import LottoStore from "./Model/LottoStore.js";
import InputView from "./View/InputView.js";

class App {
  #lottoStore;

  async play() {
    this.#submitLottoPurchaseAmount();
  }

  async #submitLottoPurchaseAmount() {
    const lottoPurchaseAmount = await this.#getLottoPurchaseAmount();
    this.#initializeLottoStore(lottoPurchaseAmount);
  }

  async #getLottoPurchaseAmount() {
    const lottoPurchaseAmount = await InputView.readLottoPurchaseAmount();
    return lottoPurchaseAmount;
  }

  #initializeLottoStore(purchaseAmount) {
    this.#lottoStore = new LottoStore(purchaseAmount);
  }
}

export default App;
