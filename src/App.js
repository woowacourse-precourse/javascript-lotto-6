import LottoStore from "./Model/LottoStore.js";
import InputView from "./View/InputView.js";

class App {
  #lottoStore;

  async play() {
    this.#submitLottoPurchaseQuantity();
  }

  async #submitLottoPurchaseQuantity() {
    const lottoPurchaseAmount = await this.#getLottoPurchaseAmount();
    const lottoPurchaseQuantity = this.#changeAmountToQuantity(lottoPurchaseAmount);
    this.#initializeLottoStore(lottoPurchaseQuantity);
  }

  async #getLottoPurchaseAmount() {
    const lottoPurchaseAmount = await InputView.readLottoPurchaseAmount();
    return lottoPurchaseAmount;
  }

  #changeAmountToQuantity(purchaseAmount) {
    const purchaseQuantity = purchaseAmount / 1000;
    return purchaseQuantity;
  }

  #initializeLottoStore(purchaseQuantity) {
    this.#lottoStore = new LottoStore(purchaseQuantity);
  }

  #buyLotto() {
    this.#lottoStore.createLotto();
  }
}

export default App;
