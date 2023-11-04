import { Console } from '@woowacourse/mission-utils';

class UserInputs {
  QUESTIONS = {
    winningNumbers: '당첨 번호를 입력해 주세요.',
    bonusNumber: '보너스 번호를 입력해 주세요.',
  };

  static async askWinningNumbers() {
    const userNumbers = await Console.readLineAsync(
      this.QUESTIONS.winningNumbers,
    );

    return userNumbers;
  }

  static async askBonusNumber() {
    const userBonusNumber = await Console.readLineAsync(
      this.QUESTIONS.bonusNumber,
    );

    return userBonusNumber;
  }
}

export default UserInputs;
