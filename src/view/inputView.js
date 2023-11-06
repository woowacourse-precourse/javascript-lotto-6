import { Console } from '@woowacourse/mission-utils';

const inputView = {
  async purchase() {
    const value = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    return value;
  },
};

export default inputView;
