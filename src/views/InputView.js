import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async getPurchaseAmount() {
    const paid = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    return Number(paid);
  },
  async getWinningNumbers() {
    const numbers = await Console.readLineAsync(
      '\n당첨 번호를 입력해 주세요.\n',
    );
    const cleanedNumbers = numbers.split(',').map((number) => Number(number));
    return cleanedNumbers;
  },
  async getBonusNumber() {
    const number = await Console.readLineAsync(
      '\n보너스 번호를 입력해 주세요.\n',
    );
    return Number(number);
  },
};
export default InputView;
