import { Console } from '@woowacourse/mission-utils';

class Read {
  static async input(message) {
    const text = await Console.readLineAsync(`${message}\n`);

    return text;
  }
}

export default Read;
