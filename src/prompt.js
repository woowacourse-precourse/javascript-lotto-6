import { Console } from '@woowacourse/mission-utils';

const prompt = {
  in: (message) => Console.readLineAsync(message),
  out: (message) => Console.print(message),
};

export default prompt;
