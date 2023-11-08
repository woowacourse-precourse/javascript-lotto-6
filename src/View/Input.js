import { Console } from '@woowacourse/mission-utils';
import Output from './Output.js';

class Input {
  static async readAsync(query, validate, callback) {
    try {
      const answer = await Console.readLineAsync(query);
      validate(answer);
      return answer;
    } catch ({ message }) {
      Output.log(message);
      const answer = await callback();
      return answer;
    }
  }

  static async readLine(message, validate) {
    const answer = await this.readAsync(message, validate, () =>
      this.readLine(message, validate),
    );
    return answer;
  }
}

export default Input;
