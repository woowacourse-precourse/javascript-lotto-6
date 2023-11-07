import Lotto from '../Lotto.js';
import InputView from '../view/InputView.js';
import PurchaseController from './PurchaseController.js';
import ValidateController from './ValidateController.js';

export default class InputController {
  inputView = new InputView();
  validateController = new ValidateController();
  purchaseController = new PurchaseController();
  amount = 0;
  winningNumbers = [];
  bonusNumber = 0;

  async inputStart() {
    await this.getAmount();
  }

  async getAmount() {
    this.amount = await this.inputView.readAmount();
    this.validateController.validateAmount(this.amount);

    this.purchaseController.issueLottos(this.amount / 1000);
  }

  async getWinningNumbers() {
    const numberString = await this.inputView.readWinningNumbers();
    this.winningNumbers = numberString.split(',');
    const lotto = new Lotto(this.winningNumbers);
  }

  async getBonusNumber() {
    this.bonusNumber = await this.inputView.readBonusNumber();
    this.validateController.validateBonusNumber(this.bonusNumber);
  }
}
