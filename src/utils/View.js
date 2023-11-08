import { Console } from '@woowacourse/mission-utils';

class View {
  static async getInputByQuestion(question) {
    const output = await Console.readLineAsync(question);

    return output;
  }

  static printOutput(output) {
    Console.print(output);
  }
}

export default View;
