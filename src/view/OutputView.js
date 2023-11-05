import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/Messages.js';

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

  static printCorrectCounts(matchCounts, price, correctCounts) {
    const parsingPrice = OutputView.foramtPrice(price);
    Console.print(`${matchCounts}개 일치 (${parsingPrice}원) - ${correctCounts}개`);
  }

  static printCorrectCountsContainBonusBall(matchCounts, price, correctCounts) {
    const parsingPrice = OutputView.foramtPrice(price);
    Console.print(`${matchCounts}개 일치, 보너스 볼 일치 (${parsingPrice}원) - ${correctCounts}개`);
  }

  static printProfit(profit) {
    Console.print(`총 수익률은 ${profit}%입니다.`);
  }
}
