import { Console } from '@woowacourse/mission-utils';

const InputView = {
  /**
   * 구입금액을 입력받는 함수
   * @returns {string} 구입금액
   */
  async readMoney() {
    const money = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    return money;
  },

  async readWinningNumber() {
    const numbers = await Console.readLineAsync(
      '\n당첨 번호를 입력해 주세요.\n',
    );
    return numbers.split(',').map(Number);
  },

  async readBonusNumber() {
    const bonus = await Console.readLineAsync(
      '\n보너스 번호를 입력해 주세요.\n',
    );
    return Number(bonus);
  },
};

export default InputView;
