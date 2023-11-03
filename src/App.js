import { Console } from '@woowacourse/mission-utils';
import Cash from './Cash.js';

class App {
  constructor() {
    this.cash = 0;
  }

  async #cashInit() {
    try {
      const cashInput = await Console.readLineAsync(
        '구입금액을 입력해 주세요.\n'
      );

      const cash = new Cash(cashInput);
      this.cash = cash.get();
    } catch (error) {
      Console.print(error.message);
      this.play();
    }
  }

  async play() {
    await this.#cashInit();
  }
}

export default App;
