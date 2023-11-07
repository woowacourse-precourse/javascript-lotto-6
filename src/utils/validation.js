import { ERROR } from '../constants/Constants.js';

const Validator = {
  purchasePrice(input) {
    if (Number.isNaN(input)) {
      throw new Error(ERROR.invalidPriceNumber);
    }
    if (input < 1000) {
      throw new Error(ERROR.invalidPriceLeast);
    }
    if (input % 1000 !== 0) {
      throw new Error(ERROR.invalidPriceUnit);
    }
  },
};

export default Validator;
