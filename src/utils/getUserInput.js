import { Console } from '@woowacourse/mission-utils';

async function getUserInput(message) {
  const input = await Console.readLineAsync(message);
  return input;
}

export default getUserInput;
