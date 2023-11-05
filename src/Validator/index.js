import Validator from './Validator.js';
import PriceValidator from './PriceValidator.js';

class ValidatorFactory {
  /**
   *
   * @param {'price' | 'bonus' | 'win'} type
   * @returns
   */
  static initialize(type) {
    switch (type) {
      case ('price'):
        return new PriceValidator();
      default:
        return new Validator();
    }
  }
}

export default ValidatorFactory;
