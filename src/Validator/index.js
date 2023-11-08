import BonusNumberValidator from './BonusNumValidator.js';
import PaymentValidator from './PaymentValidator.js';
import WinNumsValidator from './WinNumValidator.js';
import Validator from './Validator.js';

class ValidatorFactory {
  /**
   *
   * @param {'payment' | 'bonus' | 'win'} type
   * @returns
   */
  static initialize(type) {
    switch (type) {
      case ('payment'):
        return new PaymentValidator();
      case ('bonus'):
        return new BonusNumberValidator();
      case ('win'):
        return new WinNumsValidator();
      default:
        return new Validator();
    }
  }
}

export default ValidatorFactory;
