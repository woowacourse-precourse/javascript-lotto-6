import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async getPurchaseAmount() {
    const amount = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    return Number(amount);
  },
};

export default InputView;
