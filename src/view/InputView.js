import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async buyLotto() {
    const amount = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    return amount;
  },

  async winningNumber() {
    const winningNumber = await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
    return winningNumber;
  }
}

export default InputView;
