import { Console } from '@woowacourse/mission-utils';

class Input {
  async userMoney() {
    const userMoneyInput = await Console.readLineAsync(
      '구입 금액을 입력해 주세요.\n'
    );

    return userMoneyInput.trim();
  }

  async winningNumbers() {
    const winningNumbersInput = await Console.readLineAsync(
      '당첨 번호를 입력해 주세요.\n'
    );

    return winningNumbersInput.trim();
  }

  async bonusNumbers() {
    const bonusNumbersInput = await Console.readLineAsync(
      '보너스 번호를 입력해 주세요.\n'
    );

    return bonusNumbersInput.trim();
  }
}

export default Input;
