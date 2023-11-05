import Validator from './Validator.js';
import PriceValidator from './PriceValidator.js';
import BonusNumberValidator from './BonusNumValidator.js';
import WinNumValidator from './WinNumValidator.js';

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
      case ('win'):
        return new WinNumValidator();
      default:
        return new Validator();
    }
  }
}

export default ValidatorFactory;
