import { Console } from '@woowacourse/mission-utils';

class Input {
  static async text(message) {
    const carName = await Console.readLineAsync(message);
    return carName;
  }
}
export default Input;
