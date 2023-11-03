import { Console } from '@woowacourse/mission-utils';
import PromptMessage from '../constants/PromptMessage.js';

class InputView {
  constructor() {
    this.price = 0;
    this.winNum = 0;
    this.bonusNum = 0;
  }

  // 구입 금액 입력
  async getPrice() {
    const price = await Console.readLineAsync(PromptMessage.ENTER_PRICE);
    this.price = price;
    Console.print(this.price);
  }
}

export default InputView;
