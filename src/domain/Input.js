import { Console } from '@woowacourse/mission-utils';

export class Input {
  async getAmount() {
    const amount = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    return amount;
  }

  async getWinningNumber() {
    const winningNumber = await Console.readLineAsync(
      '당첨 번호를 입력해 주세요.\n'
    );
    return winningNumber.split(',').map((number) => Number(number));
  }

  async getBonusNumber() {
    const bonusNumber = await Console.readLineAsync(
      '보너스 번호를 입력해 주세요.\n'
    );
    return Number(bonusNumber);
  }
}
