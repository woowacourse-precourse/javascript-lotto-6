import { Console } from '@woowacourse/mission-utils';
import ERROR_MESSAGE from './ErrorMessage';

const LOTTO_PRICE = 1000;

class App {
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
  }
}

export default App;
