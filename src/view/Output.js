import { Console } from '@woowacourse/mission-utils';
import {
  GAMEMSG_OUTPUT_BOUGHT_LOTTO_NUMBERS,
  GAMEMSG_OUTPUT_RESULT,
} from '../constants/GameMessage.js';
import { PRIZE_CRITERIA, PRIZE_MONEY } from '../constants/PrizeConstant.js';

class Output {
  constructor() {}

  static outputError(errorMessage) {
    Console.print(`${errorMessage}`);
  }

  static outputBoughtLottoNumber(boughtLottoNumber) {
    Console.print(
      `\n${boughtLottoNumber}${GAMEMSG_OUTPUT_BOUGHT_LOTTO_NUMBERS}`,
    );
  }

  static outputLottoSetNumbers(lottoSetString) {
    Console.print(`${lottoSetString}\n`);
  }

  static outputScoreBoard(scoreBoard) {
    Console.print(GAMEMSG_OUTPUT_RESULT);
    [3, 4, 5, 5.5, 6].forEach((scores) => {
      const place = PRIZE_CRITERIA[scores];
      if (scores !== 5.5)
        Console.print(
          `${scores}개 일치 (${PRIZE_MONEY[place].toLocaleString(
            'ko-KR',
          )}원) - ${scoreBoard[place]}개`,
        );
      if (scores === 5.5)
        this.outputBonusBall(PRIZE_MONEY[place], scoreBoard[place]);
    });
  }

  static outputBonusBall(money, num) {
    Console.print(
      `5개 일치, 보너스 볼 일치 (${money.toLocaleString(
        'ko-KR',
      )}원) - ${num}개`,
    );
  }

  static outputRevenuePercent(revenuePercent) {
    Console.print(
      `총 수익률은 ${revenuePercent.toLocaleString('ko-KR')}%입니다.`,
    );
  }
}

export default Output;
