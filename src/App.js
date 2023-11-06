import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class App {
  #USER_PRICE;
  #USER_LOTTOS;

  async getInputPrice() {
    const USER_INPUT =
      await Console.readLineAsync('구입금액을 입력해 주세요.\n');

    try {
      this.checkInputPrice(parseInt(USER_INPUT, 10));
      this.#USER_PRICE = parseInt(USER_INPUT, 10);
    } catch (e) {
      Console.print(e);
      this.getInputPrice();
    }
  }

  checkInputPrice(priceInput) {
    if (Number.isNaN(priceInput)) {
      throw new Error('[ERROR] : 숫자를 입력해주세요.');
    }

    if (priceInput % 1000 !== 0) {
      throw new Error('[ERROR] : 금액은 1,000원 단위로 입력해주세요.');
    }
  }

  async play() {
    await this.getInputPrice();
    Console.print(this.#USER_PRICE);
  }
}

export default App;
