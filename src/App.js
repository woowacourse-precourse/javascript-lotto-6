import LottoStore from "./Model/LottoStore.js";
import InputView from "./View/InputView.js";
import OutputView from "./View/OutputView.js";

class App {
  #lottoStore;

  #inputView = new InputView();

  #outputView = new OutputView();

  async play() {
    await this.#purchaseLottos();
    await this.#getLottoMatchResult();
  }

  async #purchaseLottos() {
    try {
      const lottoPurchaseAmount = await this.#getLottoPurchaseAmount();
      const lottoPurchaseQuantity = this.#changeAmountToQuantity(lottoPurchaseAmount);
      this.#setUpLottoStore(lottoPurchaseQuantity);
      this.#printPurchasedLottoNumbers();
    } catch (error) {
      this.#outputView.printError(error.message);
      await this.#purchaseLottos();
    }
  }

  async #getLottoPurchaseAmount() {
    const lottoPurchaseAmount = await this.#inputView.readLottoPurchaseAmount();
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
    this.#outputView.printPurchaseResult(purchaseResult);
  }

  #getPurchasedLottoNumbers() {
    const purchasedLottoNumbers = this.#lottoStore.getLottoNumbers();
    return purchasedLottoNumbers;
  }

  async #getLottoMatchResult() {
    const lottoWinningNumbers = await this.#getLottoWinningNumbers();
    const bonusNumber = await this.#getBonusNumber(lottoWinningNumbers);
    const lottoMatchResult = this.#lottoStore.getLottoMatchResult({ lottoWinningNumbers, bonusNumber });
    this.#outputView.printMatchResult(lottoMatchResult);
  }

  async #getLottoWinningNumbers() {
    try {
      const lottoWinningNumbers = await this.#inputView.readLottoWinningNumbers();
      return lottoWinningNumbers;
    } catch (error) {
      this.#outputView.printError(error.message);
      return await this.#getLottoWinningNumbers();
    }
  }

  async #getBonusNumber(lottoWinningNumbers) {
    try {
      const bonusNumber = await this.#inputView.readBonusNumber(lottoWinningNumbers);
      return bonusNumber;
    } catch (error) {
      this.#outputView.printError(error.message);
      return await this.#getBonusNumber(lottoWinningNumbers);
    }
  }
}

export default App;
