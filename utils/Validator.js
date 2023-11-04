import ErrorMessage from '../constants/ErrorMessage.js';

class Validator {
  static validatePrice(price) {
    if (isNaN(price)) {
      throw new Error(ErrorMessage.INVALID_INPUT);
    }
    if (price % 1000 !== 0) {
      throw new Error(ErrorMessage.INVALID_PRICE);
    }
  }
}
export default Validator;
