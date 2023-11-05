import BuyValidator from './BuyValidator.js';

class Validator {
  static initialize(type) {
    if (type === 'buy') return new BuyValidator();
    throw new Error('[ERROR]');
  }
}

export default Validator;
