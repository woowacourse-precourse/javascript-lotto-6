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
      return inputValue;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default Input;
