import { Console } from '@woowacourse/mission-utils';

export default async function loopRead(readFn) {
  while (true) {
    try {
      return await readFn();
    } catch (error) {
      Console.print(error.message);
    }
  }
}
