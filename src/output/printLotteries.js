import { Console } from '@woowacourse/mission-utils';

function printLotteries(lottery) {
  for (let i = 0; i < lottery.length; i += 1) {
    Console.print(`[${lottery[i].join(', ')}]`);
  }
}

export default printLotteries;
