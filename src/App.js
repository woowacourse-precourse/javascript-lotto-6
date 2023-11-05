import { Console } from '@woowacourse/mission-utils';
import ERROR_MESSAGE from './ErrorMessage';

class App {
  static validatePayment(input) {
    const LOTTO_PRICE = 1000;
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
  }
}

export default App;
