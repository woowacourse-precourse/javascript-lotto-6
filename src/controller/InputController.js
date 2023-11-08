import Lotto from '../Lotto.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import PurchaseController from './PurchaseController.js';
import ValidateController from './ValidateController.js';
import WinController from './WinController.js';

export default class InputController {
  inputView = new InputView();
  outputView = new OutputView();
  validateController = new ValidateController();
  purchaseController = new PurchaseController();
  amount = 0;
  winningNumbers = [];
  bonusNumber = 0;
  lotto = {};

  async inputStart() {
    await this.receiveAmount();
    await this.receiveWinningNumbers();
    await this.receiveBonusNumber();

    this.winController = new WinController(
      this.amount,
      this.lotto.getNumbers(),
      this.bonusNumber,
      this.purchaseController.getPurchasedLottos()
    );
  }

  async receiveAmount() {
    while (true) {
      try {
        this.amount = await this.inputView.readAmount();
        this.validateController.validateAmount(this.amount);
        break;
      } catch (error) {
        this.outputView.printMessage(error);
      }
    }

    this.purchaseController.issueLottos(this.amount / 1000);
  }

  async receiveWinningNumbers() {
    while (true) {
      try {
        const numberString = await this.inputView.readWinningNumbers();
        this.winningNumbers = numberString.split(',');
        this.lotto = new Lotto(this.winningNumbers);
        break;
      } catch (error) {
        this.outputView.printMessage(error);
      }
    }
  }

  async receiveBonusNumber() {
    while (true) {
      try {
        this.bonusNumber = await this.inputView.readBonusNumber();
        this.validateController.validateBonusNumber(this.bonusNumber);
        break;
      } catch (error) {
        this.outputView.printMessage(error);
      }
    }
  }
}
