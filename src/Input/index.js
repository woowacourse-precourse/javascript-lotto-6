import Input from './Input.js';
import PriceInput from './PriceInput.js';
import BonusNumInput from './BonusNumInput.js';
import WinNumInput from './WinNumInput.js';

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
      case ('bonus'):
        return new BonusNumInput(type);
      case ('win'):
        return new WinNumInput(type);
      default:
        return new Input(type);
    }
  }
}

export default InputFactory;
