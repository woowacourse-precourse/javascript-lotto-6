import { Console } from '@woowacourse/mission-utils';

const Input = {
  async getLottoPrice() {
    const price = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    return price;
  },
  async getLottoNumber() {
    const numbers = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    return numbers.split(',').map((number) => Number(number));
  },
  async getLottoBonusNumber() {
    const number = await Console.readLineAsync(
      '보너스 번호를 입력해 주세요.\n'
    );
    return Number(number);
  },
};

export default Input;
