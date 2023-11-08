import Lotto from '../Lotto.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import PurchaseController from './PurchaseController.js';
import ValidateController from './ValidateController.js';
import WinningController from './WinningController.js';

export default class InputController {
  inputView = new InputView();
  outputView = new OutputView();
  validateController = new ValidateController();
  purchaseController = new PurchaseController();
  #purchaseAmount = 0;
  #winningNumbers = [];
  #bonusNumber = 0;
  // #winningLotto = {};

  async inputStart() {
    await this.receivePurchaseAmount();
    await this.receiveWinningNumbers();
    await this.receiveBonusNumber();

    this.winController = new WinningController(
      this.#purchaseAmount,
      this.#winningNumbers,
      this.#bonusNumber,
      this.purchaseController.getPurchasedLottos()
    );
  }

  async receivePurchaseAmount() {
    while (true) {
      try {
        this.#purchaseAmount = await this.inputView.readPurchaseAmount();
        this.validateController.validatePurchaseAmount(this.#purchaseAmount);
        break;
      } catch (error) {
        this.outputView.printMessage(error);
      }
    }

    this.purchaseController.purchaseLottos(this.#purchaseAmount / 1000);
  }

  async receiveWinningNumbers() {
    while (true) {
      try {
        const numberString = await this.inputView.readWinningNumbers();
        this.#winningNumbers = numberString.split(',');
        new Lotto(this.#winningNumbers);
        break;
      } catch (error) {
        this.outputView.printMessage(error);
      }
    }
  }

  async receiveBonusNumber() {
    while (true) {
      try {
        this.#bonusNumber = await this.inputView.readBonusNumber();
        this.validateController.validateBonusNumber(this.#bonusNumber);
        break;
      } catch (error) {
        this.outputView.printMessage(error);
      }
    }
  }
}
