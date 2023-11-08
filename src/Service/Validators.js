import PurchaseAmountInputValidator from './PurchaseAmountInputValidator.js';
import BonusNumberInputValidator from './BonusNumberInputValidator.js';
import WinningNumbersInputValidator from './WinningNumbersInputValidator.js';
import LottoNumbersValidator from './LottoNumbersValidator.js';

const purchaseAmountInputValidator = new PurchaseAmountInputValidator();
const bonusNumberInputValidator = new BonusNumberInputValidator();
const winningNumbersInputValidator = new WinningNumbersInputValidator();
const lottoNumbersValidator = new LottoNumbersValidator();

export const Validators = {
  purchaseAmountInputValidator,
  bonusNumberInputValidator,
  winningNumbersInputValidator,
  lottoNumbersValidator,
};
