import { Console } from '@woowacourse/mission-utils';

export class InputValue {
  async buyLotto() {
    const inputNumber = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    return Number(inputNumber);
  }

  async winningNumber() {
    const inputNumber = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    return inputNumber.split(',').map((num) => Number(num));
  }

  async bonusNumber() {
    const inputNumber = await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
    return Number(inputNumber);
  }
}
