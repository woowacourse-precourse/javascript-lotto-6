import { Console } from '@woowacourse/mission-utils';

export default class Host {
  static async getWinningNumbers() {
    const user = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    const winningNumbers = user
      .split(',')
      .map((num) => parseInt(num, 10))
      .sort((a, b) => a - b);
    return winningNumbers;
  }
}
