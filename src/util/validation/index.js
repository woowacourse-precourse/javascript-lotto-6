import purchaseMoneyInputValidator from './purchaseMoneyInputValidator.js';
import winningNumberInputValidator from './winningNumberInputValidator.js';
import bonusNumberInputValidator from './bonusNumberInputValidator.js';
const validation = {
  purchaseMoneyInput(input) {
    purchaseMoneyInputValidator.format(input);
    purchaseMoneyInputValidator.data(input);
  },
  winningNumberInput(input) {
    winningNumberInputValidator.format(input);
    winningNumberInputValidator.data(input);
  },
  bonusNumberInput(bonusNumberInput, winningNumberInput) {
    bonusNumberInputValidator.format(bonusNumberInput);
    bonusNumberInputValidator.data(bonusNumberInput, winningNumberInput);
  },
};

export default validation;
