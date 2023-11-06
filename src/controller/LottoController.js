import InputView from "../view/InputView";
import OutputView from "../view/OutputView";
import Purchase from "../model/Purchase";
import BonusNumber from "../model/BonusNumber";
import Lotto from "../model/Lotto";

class LottoController {
  #inputView;
  #outputView;
  #purchase;
  #bonusNumber;
  #lotto;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }

  async process() {
    const purchaseAmount = await this.#inputView.inputPurchase();

    this.#purchase = new Purchase(purchaseAmount);
    const purchaseNumber = this.#purchase.purchaseNumber();
    const randomNumbers = this.#purchase.createRandomNumbers();

    this.#outputView.purchaseResultView(purchaseNumber, randomNumbers);

    const winningNumber = await this.#inputView.inputWinningNumber();
    let bonusNumber = await this.#inputView.inputBonusNumber();

    this.#bonusNumber = new BonusNumber(bonusNumber, winningNumber);
    this.#lotto = new Lotto(winningNumber);
    bonusNumber = this.#bonusNumber.convertNumber;

    const winningResult = this.#lotto.winningResult(randomNumbers, bonusNumber);
    const rate = this.#lotto.rateResult(purchaseAmount, winningResult);

    this.#outputView.winningResultView(winningResult, rate);
  }
}

export default LottoController;
