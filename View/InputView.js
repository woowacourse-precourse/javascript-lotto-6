import { Console } from '@woowacourse/mission-utils';

class InputView {
  async readMoney() {
    const userMoney = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    return userMoney;
  }
}
export default InputView;
