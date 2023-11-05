import Input from './Input.js';
import PriceInput from './PriceInput.js';

class InputFactory {
  /**
   *
   * @param {'price' | 'bonus' | 'win'} type
   * @returns
   */
  static initialize(type) {
    switch (type) {
      case ('price'):
        return new PriceInput(type);
      default:
        return new Input(type);
    }
  }
}

export default InputFactory;
