import { Console } from '@woowacourse/mission-utils';
import {
  LOTTO_PRICE,
  REQUEST_MESSAGE,
  VALIDATION_ERRORS_MESSAGE,
  regexNumber,
} from './Constants.js';

class App {
  async play() {
    const money = await this.getMoney();
  }

  // 1. 로또 구입금액 입력받기
  async getMoney() {
    while (true) {
      try {
        const money = await Console.readLineAsync(REQUEST_MESSAGE.PUT_MONEY);
        return this.isValidMoney(money) && money;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  isValidMoney(money) {
    const moneyNumber = Number(money);
    if (!money) throw new Error(VALIDATION_ERRORS_MESSAGE.EMPTY_INPUT);
    if (!regexNumber.test(money))
      throw new Error(VALIDATION_ERRORS_MESSAGE.NOT_ONLY_NUMBER);
    if (moneyNumber < LOTTO_PRICE)
      throw new Error(VALIDATION_ERRORS_MESSAGE.INCORRECT_AMOUNT);
    if (moneyNumber % LOTTO_PRICE !== 0) {
      throw new Error(VALIDATION_ERRORS_MESSAGE.INCORRECT_AMOUNT);
    }

    return true;
  }
}

export default App;
