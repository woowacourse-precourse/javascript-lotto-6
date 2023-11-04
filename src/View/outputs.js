import { Console } from '@woowacourse/mission-utils';

const outputs = {
  printRandoms(random) {
    const output = random.join('');
    Console.print(output);
  },
};

export default outputs;
