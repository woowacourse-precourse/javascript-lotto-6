import { Console } from '@woowacourse/mission-utils';

class UserInputs {
  static async ask(question) {
    const userAnswer = await Console.readLineAsync(question);

    return userAnswer;
  }
}

export default UserInputs;
