import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './constant.js';
import Validator from './Validator.js';

class App {
  constructor() {
    this.validator = new Validator();
  }

  async play() {
    Console.readLine(MESSAGE.INPUT_MONEY, this.gameStart.bind(this));
  }

  gameStart(inputMoney) {
    this.validator.validateInputMoney(inputMoney);
  }
}

export default App;
