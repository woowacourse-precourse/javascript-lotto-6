import { Console } from '@woowacourse/mission-utils';
import ValidatorFactory from '../Validator/index.js';

class Input {
  constructor(type) {
    this.content = '';
    this.type = type;
  }

  async request() {
    try {
      const inputValue = await Console.readLineAsync(this.content);
      const validator = ValidatorFactory.initialize(this.type);
      validator.evaluate(inputValue);
      return Number(inputValue);
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default Input;
