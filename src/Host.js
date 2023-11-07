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

  static async getBonusNumber() {
    const bonus = await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
    if (!Number.isInteger(bonus) || bonus > 45 || bonus < 1) {
      throw new Error('[ERROR] 1~45 사이의 정수만 입력 가능합니다.');
    }
  }
}
