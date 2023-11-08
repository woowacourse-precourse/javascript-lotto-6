import { Console } from '@woowacourse/mission-utils';

const User = {
  async readInput(message) {
    return Console.readLineAsync(message);
  },
  printMessage(message) {
    Console.print(message);
  },
};
export default User;
