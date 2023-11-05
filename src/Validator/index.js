import Validator from './Validator.js';
import PriceValidator from './PriceValidator.js';
import BonusNumberValidator from './BonusNumValidator.js';

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
      case ('bonus'):
        return new BonusNumberValidator();
      default:
        return new Validator();
    }
  }
}

export default ValidatorFactory;
