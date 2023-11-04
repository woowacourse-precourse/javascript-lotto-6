import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async readLottoPurchaseAmount() {
    const inputValue = await Console.readLineAsync(
      '구입금액을 입력해 주세요.\n',
    );
    return inputValue;
  },
};

export default InputView;
