import { Console } from '@woowacourse/mission-utils';

const inputView = async (message) => {
  const userInput = await Console.readLineAsync(message);
  return userInput || '';
};

export default inputView;
