import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './constants/messages.js';
import { REWORD, TRY_COST } from './constants/policy.js';

class Board {
  constructor(ranks) {
    this.printResult(ranks);
    this.printRevenue(ranks);
  }

  static getTotalReword(rank) {
    let totalReword = 0;
    rank.forEach((v) => {
      if (v >= 1 && v < 6) {
        totalReword += REWORD[`${v}th`];
      }
    });
    return totalReword;
  }

  static getRevenue(tryCount, totalReword) {
    return Math.floor((totalReword / tryCount) * TRY_COST * 1000) / 10;
  }

  printResult(ranks) {
    Console.print(MESSAGE.LOTTO.result);
    for (let i = 1; i < 6; i++) {
      Console.print(
        MESSAGE.LOTTO[`${i}th`](ranks.filter((v) => v === i).length),
      );
    }
  }

  printRevenue(ranks) {
    Console.print(Board.getRevenue(ranks.length, Board.getTotalReword(ranks)));
  }
}

export default Board;
