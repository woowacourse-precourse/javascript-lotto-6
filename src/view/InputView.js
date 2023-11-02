import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async getLottoPurchaseAmount() {
    const answer = await Console.readLineAsync('구입금액을 입력해 주세요.');
    return answer;
  },
};

export default InputView;
