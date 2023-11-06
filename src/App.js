import LottoStore from "./Model/LottoStore.js";
import InputView from "./View/InputView.js";
import OutputView from "./View/OutputView.js";

class App {
  #lottoStore;

  async play() {
    await this.#purchaseLottos();
    await this.#getLottoMatchResult();
  }

  async #purchaseLottos() {
    const lottoPurchaseAmount = await this.#getLottoPurchaseAmount();
    const lottoPurchaseQuantity = this.#changeAmountToQuantity(lottoPurchaseAmount);
    this.#setUpLottoStore(lottoPurchaseQuantity);
    this.#printPurchasedLottoNumbers();
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

  #printPurchasedLottoNumbers() {
    const purchaseResult = this.#getPurchasedLottoNumbers();
    OutputView.printPurchaseResult(purchaseResult);
  }

  #getPurchasedLottoNumbers() {
    const purchasedLottoNumbers = this.#lottoStore.getLottoNumbers();
    return purchasedLottoNumbers;
  }

  async #getLottoMatchResult() {
    const lottoWinningNumbers = await this.#getLottoWinningNumbers();
    const bonousNumber = await this.#getBonousNumber();
    const lottoMatchResult = this.#lottoStore.getLottoMatchResult({ lottoWinningNumbers, bonousNumber });
    OutputView.printMatchResult(lottoMatchResult);
  }

  async #getLottoWinningNumbers() {
    const lottoWinningNumbers = await InputView.readLottoWinningNumbers();
    return lottoWinningNumbers;
  }

  async #getBonousNumber() {
    const bonousNumber = await InputView.readBonousNumber();
    return bonousNumber;
  }
}

export default App;
