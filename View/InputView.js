import { Console } from '@woowacourse/mission-utils';
import Validation from '../utils/validation.js';

class InputView {
  async readMoney() {
    let userMoney;

    do {
      userMoney = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
      userMoney = Number(userMoney);
    } while (!Validation.isUserMoneyOk(userMoney));

    return userMoney;
  }
}
export default InputView;
