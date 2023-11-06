import purchaseMoneyInputValidator from './purchaseMoneyInputValidator.js';

const validation = {
  purchaseMoneyInput(input) {
    purchaseMoneyInputValidator.format(input);
    purchaseMoneyInputValidator.data(input);
  },
};

export default validation;
