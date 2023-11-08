import { Console } from '@woowacourse/mission-utils';
import { keys, tierDescriptions } from './constants.js';

class Interface {
  static printTickets(tickets) {
    const count = tickets.length;

    Console.print(`\n${count}개를 구매했습니다.`);

    for (let i = 0; i < count; i += 1) {
      const ticketString = tickets[i].join(', ');
      Console.print(`[${ticketString}]`);
    }
  }

  static printResults(matches, profit) {
    Console.print('\n당첨 통계\n---');
    Console.print(`${tierDescriptions.THREE} - ${matches[keys.THREE]}개`);
    Console.print(`${tierDescriptions.FOUR} - ${matches[keys.FOUR]}개`);
    Console.print(`${tierDescriptions.FIVE} - ${matches[keys.FIVE]}개`);
    Console.print(
      `${tierDescriptions.FIVE_BONUS} - ${matches[keys.FIVE_BONUS]}개`,
    );
    Console.print(`${tierDescriptions.SIX} - ${matches[keys.SIX]}개`);
    Console.print(`총 수익률은 ${profit}%입니다.`);
  }
}

export default Interface;
