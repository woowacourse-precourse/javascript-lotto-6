import Lotto from '../Lotto.js';
import InputView from '../view/InputView.js';
import PurchaseController from './PurchaseController.js';
import ValidateController from './ValidateController.js';
import WinController from './WinController.js';

export default class InputController {
  inputView = new InputView();
  validateController = new ValidateController();
  purchaseController = new PurchaseController();
  amount = 0;
  winningNumbers = [];
  bonusNumber = 0;
  lotto = {};

  async inputStart() {
    await this.getAmount();
    await this.getWinningNumbers();
    await this.getBonusNumber();

    this.winController = new WinController(
      this.amount,
      this.lotto.getNumbers(),
      this.bonusNumber,
      this.purchaseController.getPurchasedLottos()
    );
  }

  async getAmount() {
    this.amount = await this.inputView.readAmount();
    this.validateController.validateAmount(this.amount);

    this.purchaseController.issueLottos(this.amount / 1000);
  }

  async getWinningNumbers() {
    const numberString = await this.inputView.readWinningNumbers();
    this.winningNumbers = numberString.split(',');
    this.lotto = new Lotto(this.winningNumbers);
  }

  async getBonusNumber() {
    this.bonusNumber = await this.inputView.readBonusNumber();
    this.validateController.validateBonusNumber(this.bonusNumber);
  }
}
