import validation from '../util/validation/index.js';
import inputView from '../view/inputView.js';
import { Console } from '@woowacourse/mission-utils';
class InputService {
  constructor(inputType) {
    this.inputType = inputType;
  }

  async setInputValue() {
    while (true) {
      try {
        const inputValue = await inputView.purchase();
        //TODO [test] this.inputType이 제대로인지
        validation[this.inputType](inputValue);
        return inputValue;
      } catch (error) {
        Console.print(error);
      }
      break;
    }
  }
}

export default InputService;
