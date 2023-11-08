import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/Messages.js';
import { RANK_RULES } from '../constants/Rules.js';

export default class OutputView {
  static printNewLine() {
    Console.print('');
  }

  /**
   * 발급 받은 로또 번호를 출력합니다.
   * @param {Lotto[]} lottoTickets
   */
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

  /**
   * 당첨 금액의 천 단위 마다 쉼표(,)를 찍어 반환합니다.
   * @param {number} price
   * @returns {string} [당첨 금액]
   */
  static foramtPrice(price) {
    const KOREAN_FORMAT = 'ko-KR';

    return price.toLocaleString(KOREAN_FORMAT);
  }

  /**
   * 당첨 통계를 출력합니다.
   * @param {string} rank
   * @param {number} correctCounts
   */
  static printCorrectCounts(rank, correctCounts) {
    const parsingPrice = OutputView.foramtPrice(RANK_RULES[rank].prize);
    const MATCH_COUNTS = `${RANK_RULES[rank].matches}개 일치`;
    const BONUS_BALL = rank === '2' ? `, 보너스 볼 일치` : '';
    const PRICE = ` (${parsingPrice}원)`;
    const CORRECT_COUNTS = ` - ${correctCounts}개`;

    Console.print(MATCH_COUNTS + BONUS_BALL + PRICE + CORRECT_COUNTS);
  }

  static printProfit(profit) {
    Console.print(`총 수익률은 ${profit}%입니다.`);
  }
}
