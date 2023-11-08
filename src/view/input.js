import { Console } from '@woowacourse/mission-utils';

export default class Input {
  static async readLineLoop(message, validation) {
    let result;
    try {
      result = await Input.readTrimmedLineAsync(message);
      validation(result);
    } catch (e) {
      Console.print(e.message);
      result = await Input.readLineLoop(message, validation);
    }
    return result;
  }

  static async readTrimmedLineAsync(message) {
    return Console.readLineAsync(message).then((input) => input.trim());
  }
}
