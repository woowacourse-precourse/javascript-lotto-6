import PurchaseAmountInputValidator from './PurchaseAmountInputValidator.js';
import BonusNumberInputValidator from './BonusNumberInputValidator.js';
import WinningNumbersInputValidator from './WinningNumbersInputValidator.js';

const purchaseAmountInputValidator = new PurchaseAmountInputValidator();
const bonusNumberInputValidator = new BonusNumberInputValidator();
const winningNumbersInputValidator = new WinningNumbersInputValidator();

export const Validators = {
  purchaseAmountInputValidator,
  bonusNumberInputValidator,
  winningNumbersInputValidator,
};
