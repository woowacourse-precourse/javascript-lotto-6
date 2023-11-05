import { Console } from '@woowacourse/mission-utils';

class Read {
  async answer(message) {
    const text = await Console.readLineAsync(`${message}\n`);

    return text;
  }
}

export default Read;
