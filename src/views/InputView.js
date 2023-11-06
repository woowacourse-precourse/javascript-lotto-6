import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async getPurchaseAmount() {
    return Console.readLineAsync('구입금액을 입력해 주세요.\n');
  },

  async getWinningNumbers() {
    return Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
  },

  async getBonusNumber() {
    return Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
  },
};

export default InputView;
