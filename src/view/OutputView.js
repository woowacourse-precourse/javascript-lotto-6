import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/Messages.js';
import { MATCHES_TO_RANK, WINNING_RANK_TO_PRIZE } from '../constants/Rules.js';

export default class OutputView {
  static printNewLine() {
    Console.print('');
  }

  static printLottoTickets(lottoTickets) {
    Console.print(lottoTickets.length + OUTPUT_MESSAGE.purchaseAmount);
    const START_SQUARE_BRACKET = '[';
    const CLOSE_SQUARE_BRACKET = ']';
    const COMMA_AND_SPACE = ', ';

    lottoTickets.forEach((lotto) => {
      Console.print(START_SQUARE_BRACKET + lotto.getNumbers().join(COMMA_AND_SPACE) + CLOSE_SQUARE_BRACKET);
    });

    OutputView.printNewLine();
  }

  static printwinningStats() {
    Console.print(OUTPUT_MESSAGE.winningStats);
  }

  static foramtPrice(price) {
    const KOREAN_FORMAT = 'ko-KR';

    return price.toLocaleString(KOREAN_FORMAT);
  }

  static printCorrectCounts(rank, correctCounts) {
    const parsingPrice = OutputView.foramtPrice(WINNING_RANK_TO_PRIZE[rank]);
    const MATCH_COUNTS = `${MATCHES_TO_RANK[rank]}개 일치`;
    const BONUS_BALL = rank === '2' ? `, 보너스 볼 일치` : '';
    const PRICE = ` (${parsingPrice}원)`;
    const CORRECT_COUNTS = ` - ${correctCounts}개`;

    Console.print(MATCH_COUNTS + BONUS_BALL + PRICE + CORRECT_COUNTS);
  }

  static printProfit(profit) {
    Console.print(`총 수익률은 ${profit}%입니다.`);
  }
}
