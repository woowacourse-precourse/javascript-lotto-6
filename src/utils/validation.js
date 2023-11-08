import { ERROR, OPTIONS } from '../constants/Constants.js';

const Validator = {
  purchasePrice(input) {
    if (Number.isNaN(input)) {
      throw new Error(ERROR.invalidPriceNumber);
    }
    if (input < OPTIONS.priceUnit) {
      throw new Error(ERROR.invalidPriceLeast);
    }
    if (input % OPTIONS.priceUnit !== 0) {
      throw new Error(ERROR.invalidPriceUnit);
    }
  },
};

export default Validator;
