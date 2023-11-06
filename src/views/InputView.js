import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async getPurchaseAmount() {
    return await Console.readLineAsync('구입금액을 입력해 주세요.\n');
  },

  async getWinningNumbers() {
    return await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
  },

  async getBonusNumber() {
    return await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
  },
};

export default InputView;
