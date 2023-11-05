import { Console, Random } from '@woowacourse/mission-utils';
import ERROR_MESSAGE from './ErrorMessage';
import Lotto from './Lotto';

const LOTTO_PRICE = 1000;

class App {
  constructor() {
    this.lottos = [];
  }

  static validatePayment(input) {
    const payment = Number(input);

    if (Number.isNaN(payment)) {
      throw new Error(ERROR_MESSAGE.nonNumeric);
    }
    if (payment <= 0 || !Number.isInteger(payment / LOTTO_PRICE)) {
      throw new Error(ERROR_MESSAGE.invalidAmount);
    }
  }

  async play() {
    const payment = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    App.validatePayment(payment);
    const amount = payment / LOTTO_PRICE;
    Console.print(`\n${amount}개를 구매했습니다.`);

    for (let i = 0; i < amount; i += 1) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      numbers.sort((a, b) => a - b);
      this.lottos.push(new Lotto(numbers));
      this.lottos[i].print();
    }
  }
}

export default App;
