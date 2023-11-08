import { Console } from '@woowacourse/mission-utils';

export default class MyConsole {
  log(value) {
    Console.print(value);
    return this;
  }

  async read(value = '') {
    const input = await Console.readLineAsync(value);
    return input;
  }

  async readLineAsync(value = '') {
    Console.print(value);
    await Console.readLineAsync('');
    return this;
  }
}
