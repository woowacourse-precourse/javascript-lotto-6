import LottoStore from "./Model/LottoStore.js";
import InputView from "./View/InputView.js";

class App {
  #lottoStore;

  async play() {
    this.#purchaseLottos();
  }

  async #purchaseLottos() {
    const lottoPurchaseAmount = await this.#getLottoPurchaseAmount();
    const lottoPurchaseQuantity = this.#changeAmountToQuantity(lottoPurchaseAmount);
    this.#setUpLottoStore(lottoPurchaseQuantity);
  }

  async #getLottoPurchaseAmount() {
    const lottoPurchaseAmount = await InputView.readLottoPurchaseAmount();
    return lottoPurchaseAmount;
  }

  #changeAmountToQuantity(purchaseAmount) {
    const purchaseQuantity = purchaseAmount / 1000;
    return purchaseQuantity;
  }

  #setUpLottoStore(purchaseQuantity) {
    this.#lottoStore = new LottoStore(purchaseQuantity);
  }
}

export default App;
