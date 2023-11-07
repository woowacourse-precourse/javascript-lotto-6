import { Console } from '@woowacourse/mission-utils';

class InputView {
  static async purchaseAmount() {
    const inputAmount = await Console.readLineAsync('구입 금액을 입력해 주세요.\n');
    return inputAmount;
  }

  static async sixWinningNumbers() {
    const numbers = await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
    return numbers.replace(/ /g, '');
  }

  static async bonusNumber() {
    const numbers = await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
    return numbers;
  }
}
export default InputView;
