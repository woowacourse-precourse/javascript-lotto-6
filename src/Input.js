import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto';
import Validate from './Validate';

class Input {
  static async payment() {
    const payment = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    Validate.validatePayment(payment);
    return Number(payment);
  }

  static async winning() {
    const userSelected = await Console.readLineAsync(
      '\n당첨 번호를 입력해 주세요.\n',
    );
    return new Lotto(userSelected.split(',').map((string) => Number(string)));
  }

  static async bonusNumber(winning) {
    const bonus = await Console.readLineAsync(
      '\n보너스 번호를 입력해 주세요.\n',
    );
    Validate.validateBonusNumber(bonus, winning);
    return Number(bonus);
  }
}

export default Input;
