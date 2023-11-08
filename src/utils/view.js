import { Console } from '@woowacourse/mission-utils'

const view = {
  async readLineAsync(message) {
    const input = await Console.readLineAsync(message);
    return input;
  },

  print(message) {
    Console.print(message);
  },
};

export default view;
