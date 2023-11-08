import LottoStore from "./Model/LottoStore.js";
import InputView from "./View/InputView.js";
import OutputView from "./View/OutputView.js";
import { PURCHASE_AMOUNT } from "./constants/lotto.js";

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
    return await this.#inputView.readLottoPurchaseAmount();
  }

  #changeAmountToQuantity(purchaseAmount) {
    return purchaseAmount / PURCHASE_AMOUNT.unit;
  }

  #setUpLottoStore(purchaseQuantity) {
    this.#lottoStore = new LottoStore(purchaseQuantity);
  }

  #printPurchasedLottoNumbers() {
    const purchaseResult = this.#getPurchasedLottoNumbers();
    this.#outputView.printPurchaseResult(purchaseResult);
  }

  #getPurchasedLottoNumbers() {
    return this.#lottoStore.getLottoNumbers();
  }

  async #getLottoMatchResult() {
    const lottoWinningNumbers = await this.#getLottoWinningNumbers();
    const bonusNumber = await this.#getBonusNumber(lottoWinningNumbers);

    const lottoMatchResult = this.#lottoStore.getLottoMatchResult({
      lottoWinningNumbers,
      bonusNumber,
    });

    this.#outputView.printMatchResult(lottoMatchResult);
  }

  async #getLottoWinningNumbers() {
    try {
      return await this.#inputView.readLottoWinningNumbers();
    } catch (error) {
      this.#outputView.printError(error.message);

      return await this.#getLottoWinningNumbers();
    }
  }

  async #getBonusNumber(lottoWinningNumbers) {
    try {
      return await this.#inputView.readBonusNumber(lottoWinningNumbers);
    } catch (error) {
      this.#outputView.printError(error.message);

      return await this.#getBonusNumber(lottoWinningNumbers);
    }
  }
}

export default App;
