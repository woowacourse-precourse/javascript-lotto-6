import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

const outputs = {
  printNumberOfLotto(number) {
    Console.print(`${number}${MESSAGE.output.numberOfLotto}\n`);
  },

  printRandoms(random) {
    const output = random.join('');
    Console.print(output);
  },

  printStatsTitle() {
    Console.print(MESSAGE.output.stats);
  },

  printStats(stats) {
    const output = stats.join('\n');
    Console.print(output);
  },

  printRate(rate) {
    const output = `${MESSAGE.output.rate}${rate}${MESSAGE.unit.percent}${MESSAGE.closing}`;
    Console.print(output);
  },
};

export default outputs;
