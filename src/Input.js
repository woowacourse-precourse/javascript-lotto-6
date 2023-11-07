import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto';
import Validate from './Validate';
import INPUT_MESSAGE from './constant/InputMessage';

class Input {
  static async payment() {
    while (true) {
      try {
        const payment = await Console.readLineAsync(INPUT_MESSAGE.payment);
        Validate.payment(payment);
        return Number(payment);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  static async winning() {
    while (true) {
      try {
        const userSelected = await Console.readLineAsync(INPUT_MESSAGE.winning);
        return new Lotto(
          userSelected.split(',').map((string) => Number(string)),
        );
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  static async bonusNumber(winning) {
    while (true) {
      try {
        const bonus = await Console.readLineAsync(INPUT_MESSAGE.bonus);
        Validate.bonusNumber(bonus, winning);
        return Number(bonus);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}

export default Input;
