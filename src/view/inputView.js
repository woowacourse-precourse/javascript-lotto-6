import { Console } from '@woowacourse/mission-utils';

export async function readView(text) {
  return Console.readLineAsync(text);
}
