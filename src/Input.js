import { Console } from '@woowacourse/mission-utils';

const Input = {
  async getLottoPrice() {
    const price = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    return price;
  },
};

export default Input;
