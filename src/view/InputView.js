import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async getLottoPurchaseAmount() {
    const answer = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    return answer;
  },

  async getWinningLotto() {
    const answer = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    return answer;
  },
};

export default InputView;
